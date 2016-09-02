import React, { Component, PropTypes } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Button from '../../components/Button'
import css from './Home.css'
import HomeSwiper from '../../components/HomeSwiper'
import Slider from '../../components/Slider'
import CardSmall from '../../components/CardSmall'

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

	_onCardPress (recipeID) {
	}

	render () {
		var items = [{
			_id: '57bf5e6c23a24aae1483a36c',
			title: 'Брускетта с томатами и моцареллой',
			time: 20,
			energy: 254,
			complexity: 'Просто',
			category: 1,
			image: 'https://intense-earth-33481.herokuapp.com/assets/recipe2/brusketta_main.jpg',
			__v: 0,
			stages: [ ],
			ingredients: [ ],
			categories: [ ]
		}, {
			_id: '57bfffcd7ebf153a17b38338',
			id: 9,
			title: 'Свинина с грибами и сельдереем',
			time: 234,
			energy: 333,
			complexity: 'Сложно',
			category: 3,
			image: 'https://intense-earth-33481.herokuapp.com/assets/recipe9/pork.jpg',
			__v: 0,
			stages: [ ],
			ingredients: [ ],
			categories: [ ]
		}, {
			_id: '57c0037feb6e8f5417e4622d',
			id: 4,
			title: 'Панини с жареным яйцом',
			time: 10,
			energy: 210,
			complexity: 'Просто',
			category: 1,
			image: 'https://intense-earth-33481.herokuapp.com/assets/recipe4/panini.jpg',
			__v: 0,
			stages: [ ],
			ingredients: [ ],
			categories: [ ]
		}]

		return (
			<ScrollView style={css.home}>
				<HomeSwiper items={items} />
				<View style={css.home__menu}>
					<Image style={css.home__menu} />
				</View>
				<Slider style={css.home__recomended}
					title={'РЕКОМЕНДУЕМ'}
					id={'1'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={items} />
				<View style={css.home__soon}>
					<Text style={{fontSize: 20, color: 'rgba(0,0,0,.56)', marginLeft: 24, marginBottom: 16, marginTop: 24}}>
						скоро в приложениии
					</Text>
					<CardSmall title={'Овощи'} amount={20} image={'http://fitnesslair.ru/wp-content/uploads/2016/06/sovmestimost-produktov-pitaniya2.jpg'} />
					<CardSmall title={'Мясо'} amount={20} image={'http://mirelhotel.com/tr/img/otel/alakart/a8.jpg'} />
					<CardSmall title={'Десерты'} amount={20} image={'http://foolpix.net/assets/images/sets/2375/02.jpg'} />
				</View>
				<View>
					<Button onPress={this._onPushToCategory.bind(this)} text='Перейти в категорию' />
					<Button onPress={this._onPushToSearch.bind(this)} text='Перейти в поиск' />
					<Button onPress={this._onPushToHistory.bind(this)} text='Перейти в сохраненные' />
				</View>
			</ScrollView>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired
}
