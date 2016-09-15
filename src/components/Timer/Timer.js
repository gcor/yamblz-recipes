import React, { Component, PropTypes } from 'react'
import {
	View, Text,
	TouchableOpacity,
	Animated
} from 'react-native'
import s from './Timer.css'
import listCSS from '../List/List.css'

class Timer extends Component {
	constructor () {
		super()

		this._animatedButtonColor = new Animated.Value(0)
		this._animatedTextColor = new Animated.Value(0)
		this.handlePress = this.handlePress.bind(this)
	}
	componentWillMount () {
		this.setState({
			timeout: this.props.timeout,
			textValue: 'Включить таймер'.toUpperCase(),
			activated: false
		})
	}

	handlePress () {
		const { timeout, actionLabel, timerLabel, setTimer } = this.props
		if (!timeout || !actionLabel || !timerLabel) return false

		const duration = 400
		const config = {toValue: 100, duration: duration}
		let self = this
		setTimeout(() => {
			self.setState({
				textValue: 'Таймер установлен'.toUpperCase(),
				activated: true
			})
			setTimer({
				actionLabel: actionLabel,
				timerLabel: timerLabel,
				timeout: timeout
			})
		}, duration)

		Animated.parallel([
			Animated.timing(this._animatedButtonColor, config)
			// Animated.timing(this._animatedTextColor, config)
		]).start()
	}

	render () {
		const { timerLabel } = this.props
		// console.log(actionLabel, timerLabel)
		// let time = formatTime(timeout)
		const { textValue } = this.state

		var buttonColor = this._animatedButtonColor.interpolate({
			inputRange: [0, 100],
			outputRange: ['rgba(255, 236, 59, 1)', 'rgba(241, 239, 236, 1)']
		})

		var textColor = this._animatedTextColor.interpolate({
			inputRange: [0, 100],
			outputRange: ['rgba(0, 0, 0, 1)', 'rgba(163, 162, 160, 1)']
		})

		return (
			<View style={s.timer}>
				<View style={[listCSS.item, s.item]}>
					<View style={[listCSS.item__point, s.yellowPoint]}></View>
					<Text style={listCSS.item__value}>{timerLabel}</Text>
				</View>
				<TouchableOpacity onPress={this.handlePress} activeOpacity={0.9}>
					<Animated.View style={[s.button, {backgroundColor: buttonColor}]}>
						<Text style={
							[s.buttonText, {color: textColor}]
						}>{textValue}</Text>
					</Animated.View>
				</TouchableOpacity>
			</View>
		)
	}
}

Timer.propTypes = {
	timeout: PropTypes.number.isRequired,
	actionLabel: PropTypes.string.isRequired,
	timerLabel: PropTypes.string.isRequired,
	setTimer: PropTypes.func.isRequired
}

export default Timer
