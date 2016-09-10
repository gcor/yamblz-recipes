import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View,
	NativeModules
} from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'
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
		this.props.execTimers()
		this.setState({ready: false, scroll: 0})
		InteractionManager.runAfterInteractions(() => {
			this.setState({ready: true})
		})
		SensorManager.startProximity(50)
	}

	componentDidMount () {
		this.proximityListener = DeviceEventEmitter.addListener('Proximity',
			throttle(this.proximityHandler, 800))
	}

	proximityHandler (data) {
		const { isNear } = data
		if (isNear) {
			this.props.nextSlide()
			this.scrollTo()
		}
	}

	componentWillUnmount () {
		SensorManager.stopProximity()
		this.proximityListener.remove()
		this.props.resetSlider()
	}

	scrollTo () {
		this.setState({scroll: this.props.currentHeight})
		this.recipe.scrollTo({
			y: this.state.scroll,
			animated: true
		})
	}

	vocalizeStage (stage, readyCallback) {
		var textToVocalize = stage.title + stage.steps.join('. ')
		Speech.vocalize(textToVocalize, '', () => {
			alert('Успешно')
		}, (error) => {
			alert(error)
		})
	}

	_onPress () {
		const { recipe, currentSlide } = this.props
		this.vocalizeStage (recipe.stages[currentSlide])
	}

	renderRecipe (recipe) {
		if (!this.state.ready) return null
		return (
			<View>
				<Button text='Процесс' route='home' />
				<Recipe data={recipe} />
			</View>
		)
	}

	// <Button
	// 	onPress={this._onPress.bind(this)}
	// 	text='Диктовка' />

	handleScroll = e => {
		const { slides, currentSlide } = this.props
		// console.log(currentSlide, slides.length)
		if (currentSlide >= slides.length - 1) {
			this.props.previousSlide()
			return false
		}
		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		const screenHeightDiv2 = e.nativeEvent.layoutMeasurement.height / 2
		const currentScreenOffset = currentY + screenHeightDiv2
		if (currentScreenOffset > slides[currentSlide + 1].offsetY) {
			if (currentSlide >= slides.length - 2) {
				return false
			}
			this.props.nextSlide()
		}

		if (currentScreenOffset < slides[currentSlide].offsetY) {
			this.props.previousSlide()
		}
	}
	render () {
		const { recipe } = this.props
		return (
			<ScrollView
				onScroll={this.handleScroll}
				scrollEventThrottle={200}
				ref={(r) => { this.recipe = r }}>
				{this.renderRecipe(recipe)}
			</ScrollView>
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
	execTimers: PropTypes.func.isRequired
}

export default RecipePage
