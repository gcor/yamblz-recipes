import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import IngredientList from '../../components/IngredientList'
import Button from '../../components/Button'

export default class RecipeView extends Component {
	_onPress () {
		this.props.navigatePush({
			key: 'RecipeView',
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
			}]
		}
		return (
			<ScrollView style={{paddingTop: 60, backgroundColor: 'white'}}>
				<IngredientList recipe={recipe} />
				<Button
					onPress={this._onPress.bind(this)}
					text='Приготовить' />
			</ScrollView>
		)
	}
}
