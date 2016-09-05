import React, { Component, PropTypes } from 'react'
import {
	View, Text,
	TouchableOpacity
} from 'react-native'
import s from './Timer.css'
import { formatTime } from './util'
import Notifications from '../Notification'

class Timer extends Component {
	constructor () {
		super()
		this.handlePress = this.handlePress.bind(this)
	}
	componentWillMount () {
		this.setState({value: this.props.value})
		this.tick = setInterval(this.tickTack.bind(this), 1000)
	}

	componentDidMount () {
		this.setState({value: 500000})
	}

	tickTack () {
		this.setState({value: this.state.value - 1000})
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
		let time = formatTime(this.state.value)
		const textValue = 'Включить таймер'.toUpperCase()
		return (
			<View style={s.timer}>
				<TouchableOpacity style={s.button} onPress={this.handlePress}>
					<Text style={s.buttonText}>{textValue}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

// <Text onPress={this.props.goToTimers} style={s.text}>{time}</Text>

Timer.propTypes = {
	value: PropTypes.number.isRequired,
	goToTimers: PropTypes.func.isRequired
}

export default Timer
