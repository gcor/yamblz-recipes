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
		this.handlePress = this.handlePress.bind(this)
		this._animatedButtonColor = new Animated.Value(0)
		this._animatedTextColor = new Animated.Value(0)
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
		// Notifications.pushNotification()
		setTimer({
			actionLabel: actionLabel,
			timerLabel: timerLabel,
			timeout: timeout
		})

		const duration = 400
		const config = {toValue: 100, duration: duration}
		let self = this
		setTimeout(() => {
			self.setState({
				textValue: 'Таймер установлен'.toUpperCase(),
				activated: true
			})
		}, duration)

		Animated.timing(this._animatedButtonColor, config).start()
		Animated.timing(this._animatedTextColor, config).start()
	}

	render () {
		const { timerLabel } = this.props
		// console.log(actionLabel, timerLabel)
		// let time = formatTime(timeout)
		const { textValue } = this.state

		var buttonColor = this._animatedButtonColor.interpolate({
			inputRange: [0, 100],
			outputRange: ['#FFEC3B', '#F1EFEC']
		})

		var textColor = this._animatedTextColor.interpolate({
			inputRange: [0, 100],
			outputRange: ['#000', '#A3A2A0']
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

// <Text onPress={this.props.goToTimers} style={s.text}>{time}</Text>

Timer.propTypes = {
	timeout: PropTypes.number.isRequired,
	actionLabel: PropTypes.string.isRequired,
	timerLabel: PropTypes.string.isRequired,
	setTimer: PropTypes.func.isRequired
}

export default Timer
