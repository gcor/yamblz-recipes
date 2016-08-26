import React, { Component } from 'react'
import { ScrollView, View, Image } from 'react-native'
import Button from '../../components/Button'
import RecipeTabs from '../../components/RecipeTabs'
import css from './RecipeView.css'

export default class RecipeView extends Component {
	_onPress () {
		this.props.navigatePush({
			key: 'Recipe',
			title: 'Подготовка'
		})
	}
	render () {
		const recipe = {
			image: 'http://intense-earth-33481.herokuapp.com/assets/recipe2/brusketta_main.jpg',
			portions: 2,
			ingredients: [{
				title: 'Томаты',
				quantity: 400,
				measure: 'гр'
			}, {
				title: 'Огурцы',
				quantity: 200,
				measure: 'гр'
			}, {
				title: 'Сметана',
				quantity: 100,
				measure: 'мл'
			}],
			stages: [{
				title: 'Сварите спагетти'
			}, {
				title: 'Нарежьте ингредиенты для соуса'
			}, {
				title: 'Приготовьте соус'
			}, {
				title: 'Смешайте'
			}]
		}
		return (
			<View style={{flex: 1}}>
				<ScrollView style={{paddingTop: 55, backgroundColor: 'white'}}>
					<View style={css.recipe}>
						<Image source={{uri: recipe.image}} style={css.recipe__image} />
						<RecipeTabs recipe={recipe} />
					</View>
				</ScrollView>
				<Button
					onPress={this._onPress.bind(this)}
					text='Приготовить' />
			</View>
		)
	}
}
