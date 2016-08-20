import React, {Component} from 'react'
import { View, Text } from 'react-native'
import RecipeItem from '../RecipeItem/RecipeItem'
import css from './Recipe.css'

class Recipe extends Component {
	render () {
		return (
			<View style={css.recipe}>
				{this.props.recipeItemData.map((item, index) => {
					return <RecipeItem key={index} recipeItemData={item} />
				})}
				<Text style={css.recipe__note}>Мы напомним когда нужно будет проверить или помешать</Text>
			</View>
		)
	}
}

export default Recipe
