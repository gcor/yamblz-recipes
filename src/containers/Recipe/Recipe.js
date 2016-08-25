import React, { Component, PropTypes } from 'react'
import { ScrollView } from 'react-native'
import Recipe from '../../components/Recipe'
import ui from '../../constants/css'

class RecipePage extends Component {
	componentWillMount () {
		this.props.fetchRecipes('2')
	}
	render () {
		const { recipe } = this.props
		return (
			<ScrollView style={ui.page}>
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
