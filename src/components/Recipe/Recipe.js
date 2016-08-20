import React, {Component} from 'react'
import { View } from 'react-native'
import RecipeItem from '../RecipeItem/RecipeItem'

class Recipe extends Component {
	render () {
		return (
			<View>
				{this.props.recipeItemData.map((item, index) => {
					return <RecipeItem key={index} recipeItemData={item} />
				})}
			</View>
		)
	}
}

export default Recipe
