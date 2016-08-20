import React, { Component, PropTypes } from 'react'
import { ScrollView } from 'react-native'

import Recipe from '../../components/Recipe/Recipe'

class RecipePage extends Component {
	componentWillMount () {
		this.props.fetchRecipes()
	}
	render () {
		const recipeItemData = [{
			step: 1,
			title: 'Почистите рыбу',
			actions: ['Удалите чешую', 'Сделайте надрез на брюхе', 'Удалите внутренности']
		}, {
			step: 2,
			title: 'Нарежьте овощи',
			actions: ['Лук колечками', 'Помидоры кубиками', 'Сельдерей кубиками']
		}]
		return (
			<ScrollView>
				<Recipe recipeItemData={recipeItemData} recipe={this.props.recipe} />
			</ScrollView>
		)
	}
}

RecipePage.propTypes = {
	fetchRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}

export default RecipePage
