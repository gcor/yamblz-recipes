import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image, DeviceEventEmitter, NativeModules } from 'react-native'
import css from './RecipeSpeech.css'
import SpeechIcon from '../../icons/micro.png'
import SpeechIconOn from './assets/micro2.png'
const Speech = NativeModules.SpeechApi

export default class RecipeSpeech extends Component {
	constructor () {
		super()
		this.state = {
			isSpeechEnabled: false
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
		//DeviceEventEmitter.removeAllListeners('phraseSpotted')
		//DeviceEventEmitter.removeAllListeners('spotterError')
	}

	phraseSpotted (e) {
		alert(e.command)
		// switch (e.command) {
		// 	case 'диктовка':
		// 		const { recipe, currentSlide } = this.props
		// 		Speech.stopSpotter()
		// 		this.vocalizedStage = currentSlide
		// 		this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
		// 		break
		// 	case 'следующий-шаг':
		// 		this.props.nextSlide()
		// 		currentSlide = this.props.currentSlide
		// 		recipe = this.props.recipe
		// 		Speech.stopSpotter()
		// 		if (this.vocalizedStage !== currentSlide) {
		// 			this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
		// 			this.vocalizedStage = currentSlide
		// 		}
		// 	case 'предыдущий-шаг':
		// 		this.props.previousSlide()
		// 		currentSlide = this.props.currentSlide
		// 		recipe = this.props.recipe
		// 		Speech.stopSpotter()
		// 		if (this.vocalizedStage !== currentSlide) {
		// 			this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
		// 			this.vocalizedStage = currentSlide
		// 		}
		// }
		const { recipe } = this.props
		Speech.stopSpotter()
		this.vocalizeStage(0, recipe.stages[0], this.readyCallback.bind(this), this.errorCallback.bind(this))
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

		//alert(phrasesToVocalize)

		this.vocalizeTimeout(phrasesToVocalize, readyCallback, errorCallback)
	}

	readyCallback () {
		//if (this.state.isSpeechEnabled) {
			Speech.startSpotter((error) => {
				alert('Spotter error ' + error)
			})
		//}
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
		}
		else {
			Speech.startSpotter((error) => {
			})
			this.setState({ isSpeechEnabled: true })
		}
		alert(this.state.isSpeechEnabled)
	}

	render () {
		return (
			<TouchableHighlight style={css.speech__highlight}
				underlayColor='rgba(255,255,255,0.2)'
				onPress={this._onPress.bind(this)}>
				<Image style={css.speech__icon} 
					source={this.state.isSpeechEnabled ? SpeechIconOn : SpeechIcon} />
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
