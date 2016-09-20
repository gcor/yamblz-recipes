import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Micro from '../../components/Icons/Micro'
import Plus from '../../components/Icons/Plus'

export default class Animations extends Component {
	handlePress (toggle) {
		// alert(toggle)x
	}

	render () {
		return (
			<View style={{marginTop: 80}}>
				<Text>Hello world</Text>
				<Micro handlePress={this.handlePress.bind(this)} />
				<Plus />
			</View>
		)
	}
}
