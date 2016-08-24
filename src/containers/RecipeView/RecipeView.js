import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import IngredientList from '../../components/IngredientList'

export default class RecipeView extends Component {
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
			}]
		}

		return (
			<ScrollView>
				<IngredientList recipe={recipe} />
			</ScrollView>
		)
	}
}
