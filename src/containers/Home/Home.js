import React, { Component } from 'react'
import { View, TouchableHighlight, ScrollView } from 'react-native'
import Slider from '../../components/Slider'
import Tile from '../../components/Tile'
import Preview from '../../components/Preview'
import ui from '../../constants/css'

class Home extends Component {
	_onPressHandler () {
		this.props.navigatePush({
			key: 'RecipeView',
			title: 'Рецепт'
		})
	}
	render () {
		const cards = [{
			title: 'Роял чизбургер',
			time: '30 мин',
			complexity: 'Сложно',
			energy: '380 ккал',
			stars: 4
		}, {
			title: 'Гамбургер',
			time: '15 мин',
			complexity: 'Просто',
			energy: '200 ккал',
			stars: 5
		}, {
			title: 'Биг мак',
			time: '20 мин',
			complexity: 'Средне',
			energy: '300 ккал',
			stars: 5
		}]
		// const thumbnails = [{
		// 	title: 'Супы',
		// 	recipeAmount: '20 рецептов'
		// }, {
		// 	title: 'Мясо',
		// 	recipeAmount: '63 рецепта'
		// }, {
		// 	title: 'Птица',
		// 	recipeAmount: '56 рецептов'
		// }, {
		// 	title: 'Рыба',
		// 	recipeAmount: '17 рецепта'
		// }, {
		// 	title: 'Супы',
		// 	recipeAmount: '20 рецептов'
		// }, {
		// 	title: 'Мясо',
		// 	recipeAmount: '63 рецепта'
		// }, {
		// 	title: 'Птица',
		// 	recipeAmount: '56 рецептов'
		// }, {
		// 	title: 'Рыба',
		// 	recipeAmount: '17 рецепта'
		// }]
		// const preview = {
		// 	title: 'Итальянская кухня',
		// 	days: 7,
		// 	dishes: 17
		// }
		return (
			<ScrollView>
				<TouchableHighlight>
					<View style={ui.page}>
						<Slider
							title='Идеи для ланча'
							onPressHandler={this._onPressHandler.bind(this)}
							cards={cards} />
						<Slider
							title='Идеи для ланча'
							onPressHandler={this._onPressHandler.bind(this)}
							cards={cards} />
						<Slider
							title='Идеи для ланча'
							onPressHandler={this._onPressHandler.bind(this)}
							cards={cards} />
					</View>
				</TouchableHighlight>
			</ScrollView>
		)
		// <Preview preview={preview} />
		// <Tile title='Лучшие рецепты' thumbnails={thumbnails} />
	}
}

export default Home
