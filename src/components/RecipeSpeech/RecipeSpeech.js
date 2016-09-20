import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image, DeviceEventEmitter, NativeModules, Animated } from 'react-native'
import css from './RecipeSpeech.css'
import Micro from '../Icons/Micro'
const Speech = NativeModules.SpeechApi

export default class RecipeSpeech extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isSpeechEnabled: false,
			scale: new Animated.Value(1)
		}
		this.vocalizedStage = 0
	}

	componentWillMount () {
		DeviceEventEmitter.addListener('phraseSpotted', this.phraseSpotted.bind(this))
		DeviceEventEmitter.addListener('spotterError', function (e) {
			alert('Error: ' + e.error)
		})
	}

	componentDidMount () {
		Speech.loadSpotter(() => {
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
		let { recipe, currentSlide } = this.props

		switch (e.command) {
			case 'будем_готовить': 
				//this.props.resetSlider()
				currentSlide = currentSlide
				break
			case 'давай_дальше': 
				this.props.nextSlide()
				if (currentSlide + 1 < recipe.stages.length) {
					currentSlide = currentSlide + 1
				}
				break
			case 'верни_обратно': this.props.previousSlide()
				if (currentSlide - 1 >= 0) {
					currentSlide = currentSlide - 1
				}
				break
			case 'повтори_заново':
				break
		}

		console.log(currentSlide, this.vocalizedStage)
		if (this.vocalizedStage === currentSlide) {
			if (e.command === 'давай_дальше' || e.command === 'верни_обратно') return
		}
		Speech.stopSpotter()
		this.vocalizeStage(currentSlide, recipe.stages[currentSlide], this.readyCallback.bind(this), this.errorCallback.bind(this))
		this.vocalizedStage = currentSlide
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
		var stageTitle = stage.title ? stage.title : ''
		phrasesToVocalize.push('Шаг' + (index + 1) + '. ' + stageTitle)
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

	handlePress(toggle) {
		if (toggle) {
			Speech.startSpotter((error) => { })
			alert('started')
		}
		else {
			Speech.stopSpotter()
			Speech.resetVocalizer()
			alert('stoped')
		}
	}

	render () {
		return (
			<Micro handlePress={this.handlePress} />
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
