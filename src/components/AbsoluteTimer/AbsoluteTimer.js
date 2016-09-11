import React, { Component, PropTypes } from 'react'
import TimerLabel from '../TimerLabel'

export default class AbsoluteTimer extends Component {
	render () {
		const { timers } = this.props
		const timer = timers[0]
		const { actionLabel, timeout } = timer

		return (
			<TimerLabel
				actionLabel={actionLabel}
				timeout={timeout}
				withTimeline
			/>
		)
	}
}

AbsoluteTimer.propTypes = {
	timers: PropTypes.array.isRequired
}
