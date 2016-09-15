import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PlayIcon from './assets/play.png'
import s from '../Icons.css'

export default class Play extends Component {
	render () {
		return (
			<View style={s.playpause}>
				<Image style={s.playpause__icon} source={PlayIcon} />
			</View>
		)
	}
}
