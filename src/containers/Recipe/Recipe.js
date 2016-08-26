import React, { Component, PropTypes } from 'react'
import { ScrollView, InteractionManager } from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'

class RecipePage extends Component {
	componentDidMount () {
		InteractionManager.runAfterInteractions(() => {
			this.props.fetchRecipes(2)
		})
	}
	render () {
		const { recipe } = this.props
		return (
			<ScrollView>
				<Button text='Процесс' route='home' />
				<Recipe data={recipe} />
			</ScrollView>
		)
	}
}

RecipePage.propTypes = {
	fetchRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}

export default RecipePage
