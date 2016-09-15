import React, { Component, PropTypes } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { convertTimeToMinutesAndSeconds } from './util'
import s from './TimerLabel.css'
import Notifications from '../Notification'
import TimerIcon from './assets/timer.png'

export default class TimerLabel extends Component {
	constructor (props) {
		super(props)
		this.stop = this.stop.bind(this)
		this.tick = this.tick.bind(this)
		this.state = {
			timeout: this.props.timeout,
			previousTick: new Date(Date.now()),
			initialTime: this.props.timeout,
			relativePercent: 0,
			finished: false,
			width: Dimensions.get('window').width
		}
		this.interval = setInterval(this.tick, 1000)
		this.sendPushAfterTimeout()
	}

	sendPushAfterTimeout () {
		Notifications.push('У вас тут таймер сработал. Может, уже готово?', this.state.timeout)
	}

	sync (previousTick, currentTick) {
		const latency = currentTick - previousTick - 1000
		const { timeout } = this.state
		if (latency > 5000) {
			if (timeout - latency > 0) {
				this.setState({
					timeout: timeout - latency
				})
			} else {
				this.setState({timeout: 0, relativePercent: 1})
			}
		}
	}

	tick () {
		const { timeout, initialTime, previousTick } = this.state
		const currentTick = new Date(Date.now())
		if (this.props.paused) {
			return null
		} else {
			this.sync(previousTick, currentTick)
		}
		if (timeout > 1000) {

		} else {
			this.setState({finished: true})
			this.stop()
			return
		}
		this.setState({
			timeout: this.state.timeout - 1000,
			relativePercent: 1 - timeout / initialTime,
			previousTick: new Date(Date.now())
		})
		if (this.state.timeout < 0) {
			this.setState({relativePercent: 1})
		}
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
					<Image style={s.icon} source={TimerIcon} />
					<Text style={s.actionLabel}>{actionLabel}</Text>
					<Text style={s.timeout}>{convertTimeToMinutesAndSeconds(this.state.timeout)}</Text>
				</View>
			</View>
		)
	}
}

TimerLabel.propTypes = {
	actionLabel: PropTypes.string.isRequired,
	timeout: PropTypes.number.isRequired,
	withTimeline: PropTypes.bool,
	paused: PropTypes.bool
}
