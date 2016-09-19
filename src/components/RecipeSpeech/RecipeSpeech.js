import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image, DeviceEventEmitter, NativeModules, Animated } from 'react-native'
import css from './RecipeSpeech.css'
import SpeechIcon from '../../icons/micro.png'
import SpeechIconOn from './assets/micro2.png'
const Speech = NativeModules.SpeechApi

export default class RecipeSpeech extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isSpeechEnabled: false,
			scale: new Animated.Value(1)
		}
	}
	componentWillMount () {
		DeviceEventEmitter.addListener('phraseSpotted', this.phraseSpotted.bind(this))
		DeviceEventEmitter.addListener('spotterError', function (e) {
			alert('Error: ' + e.error)
		})
	}

	componentDidMount () {
		Speech.loadSpotter(() => {
			//if (this.state.isSpeechEnabled) {
				//Speech.startSpotter((error) => {
					//alert('Spotter error ' + error)
				//})
			//}
		}, (error) => {
			alert(error)
		})
		Speech.stopSpotter()
	}

	componentWillUnmount () {
		Speech.stopSpotter()
		Speech.resetVocalizer()
		DeviceEventEmitter.removeAllListeners('phraseSpotted')
		DeviceEventEmitter.removeAllListeners('spotterError')
	}

	phraseSpotted (e) {
		alert(e.command)
		switch (e.command) {
			case 'будем-готовить':
				const { recipe, currentSlide } = this.props
				Speech.stopSpotter()
				this.vocalizedStage = currentSlide
				this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
				break
			case 'давай-дальше':
				this.props.nextSlide()
				currentSlide = this.props.currentSlide
				recipe = this.props.recipe
				Speech.stopSpotter()
				if (this.vocalizedStage !== currentSlide) {
					this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
					this.vocalizedStage = currentSlide
				}
			case 'верни-обратно':
				this.props.previousSlide()
				currentSlide = this.props.currentSlide
				recipe = this.props.recipe
				Speech.stopSpotter()
				if (this.vocalizedStage !== currentSlide) {
					this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
					this.vocalizedStage = currentSlide
				}
		}
		const { recipe } = this.props
		Speech.stopSpotter()
		this.vocalizeStage(0, recipe.stages[0], this.readyCallback.bind(this), this.errorCallback.bind(this))
	}

	vocalizeTimeout (phrasesToVocalize, readyCallback, errorCallback) {
		if (!this.state.isSpeechEnabled) return
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
		if (this.state.isSpeechEnabled) {
			Speech.startSpotter((error) => {
				alert('Spotter error ' + error)
			})
		}
	}

	errorCallback () {
		Speech.startSpotter((error) => {
			alert('Spotter error ' + error)
		})
		alert('Ошибка во время преобразования текста в речь')
	}

	_onPress () {
		const { isSpeechEnabled } = this.state
		if (isSpeechEnabled) {
			Speech.stopSpotter()
			Speech.resetVocalizer()
			this.setState({ isSpeechEnabled: false })
			clearInterval(this.timer)
			this.animateState(1)
		}
		else {
			Speech.startSpotter((error) => {
			})
			this.setState({ isSpeechEnabled: true })

			startValue = true 
			this.timer = setInterval(() => {
				value = startValue ? 1.2 : 1
				this.animateState(value)
				startValue = !startValue
			}, 300)
		}
	}

	animateState (scale) {  
 		Animated.timing(this.state.scale, {
 			toValue: scale,
 			duration: 200
 		}).start()
 	}

	render () {
		const { scale } = this.state
		return (
			<TouchableHighlight style={css.speech__highlight}
				underlayColor='rgba(255,255,255,0.2)'
				onPress={this._onPress.bind(this)}>
				<Animated.View style={{transform: [{scale: scale}]}}>
					<Image style={css.speech__icon}
						source={this.state.isSpeechEnabled ? SpeechIconOn : SpeechIcon} />
				</Animated.View>
			</TouchableHighlight>
		)
	}
}

RecipeSpeech.propTypes = {
	recipe: PropTypes.object.isRequired,
	nextSlide: PropTypes.func.isRequired,
	previousSlide: PropTypes.func.isRequired,
	resetSlider: PropTypes.func.isRequired,
	currentSlide: PropTypes.number.isRequired,
	scroll: PropTypes.bool.isRequired  
}
