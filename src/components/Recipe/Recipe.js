import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import RecipeItem from '../RecipeItem'
// import Timer from '../Timer'
// import css from './Recipe.css'

class Recipe extends Component {
	render () {
		const { data } = this.props
		let recipeItems = null
		if (data.stages) {
			recipeItems = data.stages.map((stage, index) => {
				return (
					<RecipeItem
						key={index}
						stage={stage}
						numberOfStage={index + 1}
						image={stage.image}
					/>
				)
			})
		}
		return <View>{recipeItems}</View>
		// <Text style={css.recipe__note}>Мы напомним когда нужно будет проверить или помешать</Text>
	}
}

Recipe.propTypes = {
	data: PropTypes.object.isRequired
}

export default Recipe
