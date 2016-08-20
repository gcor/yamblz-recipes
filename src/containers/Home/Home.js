import React, { Component, PropTypes } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Tile from '../../components/Tile/Tile'
import Recipe from '../../components/Recipe/Recipe'

export default class App extends Component {
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
		const recipeItemData = [{
			step: 1,
			title: 'Почистите рыбу',
			image: true,
			actions: ['Удалите чешую', 'Сделайте надрез на брюхе', 'Удалите внутренности']
		}, {
			step: 2,
			title: 'Нарежьте овощи',
			image: true,
			actions: ['Лук колечками', 'Помидоры кубиками', 'Сельдерей кубиками']
		}, {
			step: 3,
			title: 'Нафаршируйте рыбу',
			actions: ['Смажьте рыбу оливковым маслом', 'Смажьте солью, базиликом и орегано', 'Разделите овощи на равные части и заправьте рыбу']
		}, {
			step: 4,
			title: 'Запеките',
			actions: ['Раскалите духовку до 180', 'Поставьте рыбу в духовку'],
			timer: {
				time: 30000,
				timeDescription: 'Запеките 30 минут'
			}
		}]
		return (
			<ScrollView>
				<Recipe recipeItemData={recipeItemData} />
				{ /* <Button text='Каталог блюд' />
				<Slider title='Идеи для ланча' cards={cards} />
				<Tile title='Лучшие рецепты' thumbnails={thumbnails} /> */ }
			</ScrollView>
		)
	}
}
