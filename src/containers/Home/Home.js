import React, { Component, PropTypes } from 'react'
import { ScrollView } from 'react-native'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Tile from '../../components/Tile/Tile'

class Home extends Component {
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
		const thumbnails = [{
			title: 'Супы',
			recipeAmount: '20 рецептов'
		}, {
			title: 'Мясо',
			recipeAmount: '63 рецепта'
		}, {
			title: 'Птица',
			recipeAmount: '56 рецептов'
		}, {
			title: 'Рыба',
			recipeAmount: '17 рецепта'
		}, {
			title: 'Супы',
			recipeAmount: '20 рецептов'
		}, {
			title: 'Мясо',
			recipeAmount: '63 рецепта'
		}, {
			title: 'Птица',
			recipeAmount: '56 рецептов'
		}, {
			title: 'Рыба',
			recipeAmount: '17 рецепта'
		}]
		return (
			<ScrollView>
				<Button text='Каталог блюд' />
				<Slider title='Идеи для ланча' cards={cards} />
				<Tile title='Лучшие рецепты' thumbnails={thumbnails} />
			</ScrollView>
		)
	}
}

export default Home
