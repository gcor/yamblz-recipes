import React, { Component } from 'react'
import {
	View, Text
} from 'react-native'
import s from './TimerActions.css'

class TimerActions extends Component {
	render () {
		return (
			<View style={s.container}>
				<View style={s.iconHolder}>
					<View style={s.pause}></View>
					<View style={s.remove}></View>
				</View>
			</View>
		)
	}
}

export default TimerActions
