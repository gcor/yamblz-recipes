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

	_onPushToTimers () {
		this.props.navigatePush({
			key: 'Timers',
			title: 'Таймеры'
		})
	}

	_onCardPress (recipeID) {
		const { navigatePush, setCurrentRecipe } = this.props
		setCurrentRecipe(recipeID)
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
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
			_id: '57bfe641a6bae0f91575a084',
			title: 'Курица меланезе со спагетти',
			time: 45,
			energy: 965,
			image: 'http://www.caffeconcerto.co.uk/images-menus/meat-chicken-milanese-with-spaghetti_tn-jpg_1466080216.jpg'
		}, {
			_id: '57c3f9e29a9071360856cedc',
			title: 'Запеченая паста 4 сыра',
			image: 'http://intense-earth-33481.herokuapp.com/assets/recipe11/4cheese.jpg',
			time: 40,
			energy: 824
		}]

		const titles = {
			recommend: 'рекомендуем'.toUpperCase(),
			soon: 'скоро в приложении'.toUpperCase()
		}

		return (
			<ScrollView style={css.home}>
				<HomeSwiper
					onPressHandler={this._onCardPress.bind(this)}
					items={items}
					/>
				<View style={css.home__menu}>
					<Image style={css.home__menu} />
				</View>
				<Slider style={css.home__recomended}
					title={titles.recommend}
					id={'1'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={items} />
				<View style={css.home__soon}>
					<Text style={{fontSize: 16, color: 'rgba(0,0,0,.56)', marginLeft: 24, marginBottom: 16, marginTop: 24}}>
						{titles.soon}
					</Text>
					<CardSmall onCategoryPress={this._onPushToCategory.bind(this)} title={'Овощи'} amount={20} image={'http://fitnesslair.ru/wp-content/uploads/2016/06/sovmestimost-produktov-pitaniya2.jpg'} />
					<CardSmall onCategoryPress={this._onPushToCategory.bind(this)} title={'Мясо'} amount={20} image={'http://mirelhotel.com/tr/img/otel/alakart/a8.jpg'} />
					<CardSmall onCategoryPress={this._onPushToCategory.bind(this)} title={'Десерты'} amount={20} image={'http://foolpix.net/assets/images/sets/2375/02.jpg'} />
				</View>
				<View>
					<Button onPress={this._onPushToCategory.bind(this)} text='Перейти в категорию' />
					<Button onPress={this._onPushToSearch.bind(this)} text='Перейти в поиск' />
					<Button onPress={this._onPushToHistory.bind(this)} text='Перейти в сохраненные' />
					<Button onPress={this._onPushToTimers.bind(this)} text='Перейти к таймерам' />
				</View>
			</ScrollView>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired
}
