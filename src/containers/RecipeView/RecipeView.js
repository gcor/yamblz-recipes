import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Image } from 'react-native'
import Button from '../../components/Button'
import RecipeTabs from '../../components/RecipeTabs'
import css from './RecipeView.css'

export default class RecipeView extends Component {
	_onPress () {
		this.props.navigatePush({
			key: 'Recipe',
			title: 'Процесс'
		})
	}
	onIncrement () {
		this.props.incrementRecipePortion('57bf5e6c23a24aae1483a36c')
	}
	onDecrement () {
		this.props.decrementRecipePortion('57bf5e6c23a24aae1483a36c')
	}
	componentDidMount () {
		console.log(this.props.fetchRecipes('57bf5e6c23a24aae1483a36c'))
	}
	render () {
		const recipe = {
			image: 'http://intense-earth-33481.herokuapp.com/assets/recipe2/brusketta_main.jpg',
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
						<RecipeTabs
							recipe={this.props.recipe}
							onDecrement={this.onDecrement.bind(this)}
							onIncrement={this.onIncrement.bind(this)}
						/>
					</View>
				</ScrollView>
				<Button
					onPress={this._onPress.bind(this)}
					text='Приготовить' />
			</View>
		)
	}
}

RecipeView.propTypes = {
	recipe: React.PropTypes.object
}
