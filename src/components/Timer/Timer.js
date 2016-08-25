import React, { Component, PropTypes } from 'react'
import {
	View, Text, Picker
} from 'react-native'
import s from './Timer.css'
import { formatTime } from './util'

class Timer extends Component {
	componentWillMount () {
		this.setState({value: 600000})
		this.tick = setInterval(this.tickTack.bind(this), 1000)
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
			<View>
				<Picker
					style={{width: 100}}
					selectedValue={this.state.selected}
					onValueChange={(value) => this.setState({selected: value})}>
					<Picker.Item label='5' value={5} />
					<Picker.Item label='10' value={10} />
					<Picker.Item label='15' value={15} />
				</Picker>
				<Text style={s.timer}>{time}</Text>
			</View>
		)
	}
}

Timer.propTypes = {
	value: PropTypes.number.isRequired
}

export default Timer
