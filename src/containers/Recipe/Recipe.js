import React, { Component, PropTypes } from 'react'
import { ScrollView } from 'react-native'

import Recipe from '../../components/Recipe/Recipe'
import Header from '../../components/Header/Header'

class RecipePage extends Component {
	componentWillMount () {
		this.props.fetchRecipes()
	}
	render () {
		const recipeItemData = [{
			step: 1,
			title: 'Почистите рыбу',
			image: true,
			actions: ['Удалите чешую', 'Сделайте надрез на брюхе', 'Удалите внутренности']
		}, {
			step: 2,
			title: 'Нарежьте овощи',
			image: true,
			actions: ['Лук колечками', 'Помидоры кубиками', 'Сельдерей кубиками']
		}, {
			step: 3,
			title: 'Нафаршируйте рыбу',
			actions: ['Смажьте рыбу оливковым маслом', 'Смажьте солью, базиликом и орегано', 'Разделите овощи на равные части и заправьте рыбу']
		}, {
			step: 4,
			title: 'Запеките',
			actions: ['Раскалите духовку до 180', 'Поставьте рыбу в духовку'],
			timer: {
				time: 30000,
				timeDescription: 'Запеките 30 минут'
			}
		}]
		return (
			<ScrollView>
				<Header title='Запеченая форель с овощами' />
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
