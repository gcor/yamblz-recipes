import React, { Component, PropTypes } from 'react'
import { ScrollView, InteractionManager } from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'

class RecipePage extends Component {
	componentWillMount () {
		this.setState({ready: false})
		InteractionManager.runAfterInteractions(() => {
				this.setState({ready: true})
		})
	}
	renderRecipe (recipe) {
		return (
			<ScrollView>
				<Button text='Процесс' route='home' />
				<Recipe data={recipe} />
			</ScrollView>
		)
	}
	render () {
		const { recipe } = this.props
		if (this.state.ready) return this.renderRecipe(recipe)
		return null
	}
}

RecipePage.propTypes = {
	fetchRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}

export default RecipePage
