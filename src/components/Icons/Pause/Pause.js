import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PauseIcon from './assets/pause.png'
import s from '../Icons.css'

export default class Pause extends Component {
	render () {
		return (
			<View style={s.playpause}>
				<Image style={s.playpause__icon} source={PauseIcon} />
			</View>
		)
	}
}
