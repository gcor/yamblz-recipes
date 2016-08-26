import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
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
			}]
		}
		return (
			<View style={{flex: 1}}>
				<ScrollView style={{paddingTop: 60, backgroundColor: 'white'}}>
					<View style={css.recipe}>
						<View style={css.recipe__image}></View>
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
