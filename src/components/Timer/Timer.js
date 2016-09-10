import React, { Component, PropTypes } from 'react'
import {
	View, Text,
	TouchableOpacity
} from 'react-native'
import s from './Timer.css'
import listCSS from '../List/List.css'
import { formatTime } from './util'
import Notifications from '../Notification'

class Timer extends Component {
	constructor () {
		super()
		this.handlePress = this.handlePress.bind(this)
	}
	componentWillMount () {
		this.setState({timeout: this.props.timeout})
		this.tick = setInterval(this.tickTack.bind(this), 1000)
	}

	componentDidMount () {
		this.setState({timeout: 500000})
	}

	tickTack () {
		this.setState({timeout: this.state.timeout - 1000})
	}

	stop () {
		this.pause()
		this.tick = undefined
	}

	pause () {
		clearInterval(this.tick)
	}

	componentWillUnmount () {
		this.stop()
	}

	handlePress () {
		Notifications.pushNotification()
		this.props.goToTimers()
	}

	render () {
		const { timeout, actionLabel, timerLabel } = this.props
		console.log(actionLabel, timerLabel)
		let time = formatTime(this.state.timeout)
		const textValue = 'Включить таймер'.toUpperCase()
		return (
			<View style={s.timer}>
				<View style={[listCSS.item, s.item]}>
					<View style={[listCSS.item__point, s.yellowPoint]}></View>
					<Text style={listCSS.item__value}>{timerLabel}</Text>
				</View>
				<TouchableOpacity style={s.button} onPress={this.handlePress}>
					<Text style={s.buttonText}>{textValue}</Text>
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
	goToTimers: PropTypes.func.isRequired
}

export default Timer
