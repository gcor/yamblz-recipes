import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import TimerLabel from '../TimerLabel'
import s from './AbsoluteTimer.css'

export default class AbsoluteTimer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			timersCount: props.timers.length
		}
		this.handleToggle = this.handleToggle.bind(this)
	}

	renderTimers () {
		const { timers } = this.props
		return (
			timers.map((timer, index) => {
				if (!timer) return null
				const { actionLabel, timeout } = timer
				return (
					<TimerLabel
						key={index}
						withTimeline={index === 0}
						actionLabel={actionLabel}
						timeout={timeout}
					/>
				)
			})
		)
	}

	renderDrawer () {
		return (
			<TouchableOpacity style={s.drawer} onPress={this.handleToggle}>
				<View style={s.button}></View>
			</TouchableOpacity>
		)
	}

	handleToggle () {
		alert('boo!')
	}

	render () {
		const { timers } = this.props
		if (timers.length === 0) return null

		return (
			<View style={[s.container]}>
				{this.renderDrawer()}
				{this.renderTimers()}
			</View>
		)
	}
}

AbsoluteTimer.propTypes = {
	timers: PropTypes.array.isRequired,
	goToTimers: PropTypes.func.isRequired
}
