import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View,
	NativeModules
} from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'
import AbsoluteTimer from '../../components/AbsoluteTimer'
import { SensorManager } from 'NativeModules'
import { throttle } from 'lodash'
const Speech = NativeModules.SpeechApi

class RecipePage extends Component {
	constructor (props) {
		super(props)
		this.proximityHandler = this.proximityHandler.bind(this)
	}
	componentWillMount () {
		DeviceEventEmitter.removeAllListeners('Proximity')
		this.setState({
			ready: false, scroll: 0,
			currentSlide: 0
		})
		InteractionManager.runAfterInteractions(() => {
			this.setState({ready: true})
		})
		SensorManager.startProximity(50)

		DeviceEventEmitter.addListener('phraseSpotted', this.phraseSpotted.bind(this))
		DeviceEventEmitter.addListener('spotterError', function (e) {
			alert('Error: ' + e.error)
		})
	}

	componentWillReceiveProps (props) {
		console.log(props.scroll, props.currentSlide)
		if (props.currentSlide !== this.state.currentSlide &&
			props.scroll) {
			this.scrollTo()
		}
		if (this.state.currentSlide !== props.currentSlide) {
			this.setState({
				currentSlide: props.currentSlide
			})
		}
	}

	phraseSpotted (e) {
		switch (e.command) {
			case 'диктовка':
				const { recipe, currentSlide } = this.props
				Speech.stopSpotter()
				this.vocalizedStage = currentSlide
				this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
				break
			case 'следующий-шаг':
				this.props.nextSlide()
				this.scrollTo()
				currentSlide = this.props.currentSlide
				recipe = this.props.recipe
				Speech.stopSpotter()
				if (this.vocalizedStage !== currentSlide) {
					this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
					this.vocalizedStage = currentSlide
				} else {
					Speech.vocalize('Блюдо готово.', '', () => {
					}, () => {
						alert('Ошибка во время преобразования текста в речь')
					})
				}
		}
		alert(e.command)
	}

	componentDidMount () {
		this.proximityListener = DeviceEventEmitter.addListener('Proximity',
			throttle(this.proximityHandler, 800))

		Speech.loadSpotter(() => {
			alert('Spotter loaded')
			Speech.startSpotter((error) => {
				alert('Spotter error ' + error)
			})
		}, (error) => {
			alert(error)
		})
	}

	proximityHandler (data) {
		const { isNear } = data
		if (isNear) {
			this.props.nextSlide()
		}
	}

	componentWillUnmount () {
		SensorManager.stopProximity()
		this.proximityListener.remove()
		this.props.resetSlider()
		this.props.resetTimers()
		Speech.stopSpotter()
	}

	scrollTo () {
		this.setState({scroll: this.props.currentHeight})
		this.recipe.scrollTo({
			y: this.state.scroll,
			animated: true
		})
	}

	vocalizeTimeout (phrasesToVocalize, readyCallback, errorCallback) {
		var phrase = phrasesToVocalize.shift()
		Speech.vocalize(phrase, '', () => {
			if (phrasesToVocalize.length > 0) {
				setTimeout(this.vocalizeTimeout.bind(this), 1000, phrasesToVocalize, readyCallback, errorCallback)
			} else {
				readyCallback()
			}
		}, (error) => {
			errorCallback(error)
		})
	}

	vocalizeStage (index, stage, readyCallback, errorCallback) {
		var phrasesToVocalize = []
		phrasesToVocalize.push('Шаг' + (index + 1) + '. ' + stage.title)
		stage.steps.forEach(function (element, index) {
			phrasesToVocalize.push(element.title)
		})

		this.vocalizeTimeout(phrasesToVocalize, readyCallback, errorCallback)
	}

	readyCallback () {
		Speech.startSpotter((error) => {
			alert('Spotter error ' + error)
		})
	}

	errorCallback () {
		alert('Ошибка во время преобразования текста в речь')
	}

	_onPress () {
		const { recipe, currentSlide } = this.props
		Speech.stopSpotter()
		this.vocalizedStage = currentSlide
		this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
	}

	renderRecipe (recipe) {
		if (!this.state.ready) return null
		return (
			<View>
				<Button
					onPress={this._onPress.bind(this)}
					text='Диктовка' />
				<Recipe data={recipe} />
			</View>
		)
	}

	handleScroll = e => {
		const { slides, currentSlide } = this.props
		// console.log(currentSlide, slides.lengtsh)
		if (currentSlide >= slides.length - 1) {
			this.props.previousSlide({scroll: false})
			return false
		}
		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		const screenHeightDiv2 = e.nativeEvent.layoutMeasurement.height / 2
		const currentScreenOffset = currentY + screenHeightDiv2
		if (currentScreenOffset > slides[currentSlide + 1].offsetY) {
			if (currentSlide >= slides.length - 2) {
				return false
			}
			this.props.nextSlide({scroll: false})
		}

		if (currentScreenOffset < slides[currentSlide].offsetY) {
			this.props.previousSlide({scroll: false})
		}
	}
	render () {
		const { recipe } = this.props
		return (
			<View style={{flex: 1, marginTop: 56}}>
				<ScrollView
					onScroll={this.handleScroll}
					scrollEventThrottle={200}
					ref={(r) => { this.recipe = r }}>
					{this.renderRecipe(recipe)}
				</ScrollView>
				<AbsoluteTimer />
			</View>
		)
	}
}

RecipePage.propTypes = {
	fetchRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
	nextSlide: PropTypes.func.isRequired,
	previousSlide: PropTypes.func.isRequired,
	handleSwipe: PropTypes.func.isRequired,
	resetSlider: PropTypes.func.isRequired,
	currentHeight: PropTypes.number.isRequired,
	slides: PropTypes.array.isRequired,
	currentSlide: PropTypes.number.isRequired,
	resetTimers: PropTypes.func.isRequired,
	scroll: PropTypes.bool.isRequired
}

export default RecipePage
