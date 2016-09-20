import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Micro from '../../components/Icons/Micro'

export default class Animations extends Component {
	handlePress(toggle) {
        alert(toggle)
    }

    render () {
		return (
			<View style={{marginTop: 80}}>
				<Text>Hello world</Text>
                <Micro handlePress={this.handlePress.bind(this)} />
			</View>
		)
	}
}
