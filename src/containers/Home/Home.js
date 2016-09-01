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
	_onPushToHistory () {
		this.props.navigatePush({
			key: 'History',
			title: 'Ваши рецепты'
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
				<Button
					onPress={this._onPushToHistory.bind(this)}
					text='Перейти в сохраненные' />
			</View>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired
}
