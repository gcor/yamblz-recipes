import React, { Component, PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import TimerLabel from '../TimerLabel'

export default class AbsoluteTimer extends Component {
	constructor () {
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick () {
		this.props.goToTimers()
	}
	render () {
		const { timers } = this.props
		if (timers.length === 0) return null
		const timer = timers[0]
		const { actionLabel, timeout } = timer

		return (
			<TouchableOpacity onPress={this.handleClick}>
				<TimerLabel
					actionLabel={actionLabel}
					timeout={timeout}
					withTimeline
				/>
			</TouchableOpacity>
		)
	}
}

AbsoluteTimer.propTypes = {
	timers: PropTypes.array.isRequired,
	goToTimers: PropTypes.func.isRequired
}
