import React, { Component, PropTypes } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import RecipeItem from '../RecipeItem/RecipeItem'
import css from './Recipe.css'

class Recipe extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isReady: false
		}
	}
	renderSteps () {
		const { data } = this.props
		if (data.steps) {
			return data.steps.map((step, index) => {
				return (
					<RecipeItem
						key={index}
						recipeItemData={step}
						image={data.image}
					/>
				)
			})
		}

		return null
	}

	componentDidMount () {
		InteractionManager.runAfterInteractions(() => {
			this.setState({isReady: true})
		})
	}
	render () {
		if (!this.state.isReady) {
			return null
		}
		return (
			<View>
				{this.renderSteps()}
				<Text style={css.recipe__note}>Мы напомним когда нужно будет проверить или помешать</Text>
			</View>
		)
	}
}

Recipe.propTypes = {
	data: PropTypes.object.isRequired
}

export default Recipe
