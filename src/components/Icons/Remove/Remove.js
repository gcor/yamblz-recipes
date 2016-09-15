import React, { Component } from 'react'
import { View, Image } from 'react-native'
import s from '../Icons.css'
import RemoveIcon from './assets/remove.png'

export default class Remove extends Component {
	render () {
		return (
			<View style={s.remove}>
				<Image style={s.remove__icon} source={RemoveIcon} />
			</View>
		)
	}
}
