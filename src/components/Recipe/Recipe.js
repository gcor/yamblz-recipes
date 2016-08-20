import React, {Component} from 'react'
import { View } from 'react-native'
import RecipeItem from '../RecipeItem/RecipeItem'

class Recipe extends Component {
	render () {
		console.log(this.props.recipe)
		return (
			<View>
				{this.props.recipeItemData.map((item, index) => {
					return (
						<RecipeItem
							key={index}
							recipeItemData={item}
							image={this.props.recipe.image} />
					)
				})}
			</View>
		)
	}
}

export default Recipe
