import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import IngredientList from '../../components/IngredientList'
import Button from '../../components/Button'
import RecipeTabs from '../../components/RecipeTabs'

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
				quantity: 2,
				measure: 'шт'
			}, {
				title: 'Огурцы',
				quantity: 200,
				measure: 'гр'
			}, {
				title: 'Сметана',
				quantity: 100,
				measure: 'мл'
			}]
		}
		return (
			<View style={{flex: 1}}>
				<ScrollView style={{paddingTop: 60, backgroundColor: 'white'}}>
					<RecipeTabs recipe={recipe} />
				</ScrollView>
				<Button
					onPress={this._onPress.bind(this)}
					text='Приготовить' />
			</View>
		)
	}
}
