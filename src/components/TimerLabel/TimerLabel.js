import React, { Component, PropTypes } from 'react'
import {
	View,
	Text,
	Dimensions
} from 'react-native'
import { convertTimeToMinutesAndSeconds } from './util'
import s from './TimerLabel.css'

export default class TimerList extends Component {
	constructor (props) {
		super(props)
		this.stop = this.stop.bind(this)
		this.tick = this.tick.bind(this)

		this.state = {
			timeout: this.props.timeout,
			initialTime: this.props.timeout,
			relativePercent: 0,
			finished: false,
			width: Dimensions.get('window').width
		}
		this.interval = setInterval(this.tick, 1000)
	}

	tick () {
		const { timeout, initialTime } = this.state
		if (timeout < 1000) {
			this.setState({
				finished: true
			})
			this.stop()
			return
		}
		this.setState({
			timeout: this.state.timeout - 1000,
			relativePercent: 1 - timeout / initialTime
		})
	}

	stop () {
		clearInterval(this.interval)
		this.interval = undefined
	}

	componentWillUnmount () {
		this.stop()
	}

	renderTimeline () {
		if (this.props.withTimeline) {
			return (
				<View>
					<View style={s.timeline}></View>
					<View style={[s.timeline, {
						borderTopColor: '#FFEC3B',
						marginTop: -4,
						width: this.state.width * this.state.relativePercent
					}]}
					></View>
				</View>
			)
		}
		return null
	}

	render () {
		const { actionLabel } = this.props
		return (
			<View>
				{this.renderTimeline()}
				<View style={s.container}>
					<View style={s.icon}></View>
					<Text style={s.actionLabel} onPress={this.stop}>{actionLabel}</Text>
					<Text style={s.timeout}>{convertTimeToMinutesAndSeconds(this.state.timeout)}</Text>
				</View>
			</View>
		)
	}
}

TimerList.propTypes = {
	actionLabel: PropTypes.string.isRequired,
	timeout: PropTypes.number.isRequired,
	withTimeline: PropTypes.bool
}
