import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Button from '../../components/Button'
import ui from '../../constants/css'

export default class Home extends Component {
	_onPushToCategory () {
		this.props.navigatePush({
			key: 'Category',
			title: 'Категория'
		})
	}
	_onPushToSearch () {
		this.props.navigatePush({
			key: 'Search',
			title: 'Поиск'
		})
	}
	render () {
		return (
			<View style={ui.page}>
				<Button
					onPress={this._onPushToCategory.bind(this)}
					text='Перейти в категорию' />
				<Button
					onPress={this._onPushToSearch.bind(this)}
					text='Перейти в поиск' />
			</View>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired
}
