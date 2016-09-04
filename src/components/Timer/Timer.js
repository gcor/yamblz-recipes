import React, { Component, PropTypes } from 'react'
import {
	View, Text
} from 'react-native'
import s from './Timer.css'
import { formatTime } from './util'
import Notification from '../Notification'

class Timer extends Component {
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

	render () {
		let time = formatTime(this.state.value)
		return (
			<View style={s.timer}>
				<Text onPress={this.props.goToTimers} style={s.text}>{time}</Text>
				<Notification />
			</View>
		)
	}
}

Timer.propTypes = {
	value: PropTypes.number.isRequired,
	goToTimers: PropTypes.func.isRequired
}

export default Timer
