import React, { Component } from 'react'
import {
	View,
	Text
} from 'react-native'
import ui from '../../constants/css'
import TimerLabel from '../../components/TimerLabel'

export default class Timers extends Component {
	render () {
		return (
			<View style={ui.page}>
				<View style={{marginTop: 20}}>
					<TimerLabel
						withTimeline
						actionLabel='Варится бульон'
						timeout={166000}
					/>
					<TimerLabel
						actionLabel='Варится бульон'
						timeout={6000}
					/>
				</View>
			</View>
		)
	}
}
