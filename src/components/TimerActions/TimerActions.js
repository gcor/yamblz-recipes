import React, { Component, PropTypes } from 'react'
import {
	View, TouchableOpacity
} from 'react-native'
import s from './TimerActions.css'
import Pause from '../Icons/Pause'
import Play from '../Icons/Play'
import Remove from '../Icons/Remove'

class TimerActions extends Component {
	constructor () {
		super()
		this.state = {
			paused: false
		}
		this.togglePause = this.togglePause.bind(this)
	}
	togglePause () {
		this.setState({paused: !this.state.paused})
		const { pauseTimer, timerID } = this.props
		pauseTimer(timerID)
	}

	renderPlayPause () {
		if (this.state.paused) {
			return (
				<Play />
			)
		}
		return <Pause />
	}
	render () {
		const { removeTimer, timerID } = this.props
		return (
			<View style={s.container} >
				<View style={s.iconHolder}>
					<TouchableOpacity activeOpacity={0.8}
						style={s.pause} onPress={this.togglePause}>
						{this.renderPlayPause()}
					</TouchableOpacity>
					<TouchableOpacity style={s.remove} onPress={() => removeTimer(timerID)}>
						<Remove />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

TimerActions.propTypes = {
	removeTimer: PropTypes.func.isRequired,
	pauseTimer: PropTypes.func.isRequired,
	timerID: PropTypes.number.isRequired
}

export default TimerActions
