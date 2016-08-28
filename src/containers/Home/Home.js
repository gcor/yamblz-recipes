import React, { Component } from 'react'
import { View } from 'react-native'
import Button from '../../components/Button'
import ui from '../../constants/css'

export default class Home extends Component {
	_onPress () {
		this.props.navigatePush({
			key: 'Category',
			title: 'Категория'
		})
	}
	render () {
		return (
			<View style={ui.page}>
				<Button
					onPress={this._onPress.bind(this)}
					text='Перейти в категорию' />
			</View>
		)
	}
}
