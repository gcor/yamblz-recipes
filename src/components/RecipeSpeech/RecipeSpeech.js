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
		this.vocalizedStage = 0
	}

	componentDidMount () {
		DeviceEventEmitter.addListener('phraseSpotted', this.phraseSpotted.bind(this))
		DeviceEventEmitter.addListener('spotterError', function (e) {
			alert('Error: ' + e.error)
		})

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
		let slideToVocalize = this.vocalizedStage
		switch (e.command) {
			case 'будем_готовить': 
				slideToVocalize = 0
				break
			case 'давай_дальше': 
				if (this.vocalizedStage + 1 < recipe.stages.length) {
					slideToVocalize = this.vocalizedStage + 1
				}
				break
			case 'верни_обратно': this.props.previousSlide()
				if (this.vocalizedStage - 1 >= 0) {
					slideToVocalize = this.vocalizedStage - 1	
				}
				break
			case 'повтори_заново':
				slideToVocalize = this.vocalizedStage
				break
		}

		this.props.goTo(slideToVocalize)
		if (this.vocalizedStage === slideToVocalize) {
			if (e.command === 'давай_дальше' || e.command === 'верни_обратно') return
		}
		Speech.stopSpotter()
		this.vocalizeStage(slideToVocalize, recipe.stages[slideToVocalize])
		this.vocalizedStage = slideToVocalize
	}

	vocalizeTimeout (phrasesToVocalize) {
		if (!this.state.isSpeechEnabled) return
		var phrase = phrasesToVocalize.shift()
		Speech.vocalize(phrase, '', () => {
			if (phrasesToVocalize.length > 0) {
				setTimeout(this.vocalizeTimeout.bind(this), 1000, phrasesToVocalize)
			} else {
				this.readyCallback()
			}
		}, (error) => {
			this.errorCallback(error)
		})
	}

	vocalizeStage (index, stage) {
		var phrasesToVocalize = []
		var stageTitle = stage.title ? stage.title : ''
		phrasesToVocalize.push('Шаг' + (index + 1) + '. ' + stageTitle)
		stage.steps.forEach(function (element, index) {
			phrasesToVocalize.push(element.title)
		})
		this.vocalizeTimeout(phrasesToVocalize)
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
				underlayColor='rgba(0,0,0,0)'
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
	scroll: PropTypes.bool.isRequired,
	goToStart: PropTypes.func.isRequired,
	goTo: PropTypes.func.isRequired
}
