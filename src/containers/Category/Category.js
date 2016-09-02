import React, { Component, PropTypes } from 'react'
import { View, TouchableHighlight, ScrollView, InteractionManager } from 'react-native'
import Slider from '../../components/Slider'
import ui from '../../constants/css'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import Preloader from '../../components/Preloader'

class Category extends Component {
	componentWillMount () {
		InteractionManager.runAfterInteractions(() => {
			this.props.fetchCategories()
		})
	}
	_onPressHandler (recipeID) {
		const { navigatePush, setCurrentRecipe } = this.props
		setCurrentRecipe(recipeID)
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}
	renderCategory (category) {
		const { title, id, recipes } = category
		return (
			<Slider
				title={title}
				key={id} id={id}
				onPressHandler={this._onPressHandler.bind(this)}
				recipes={recipes} />
		)
	}

	renderContent () {
		const { categories, status } = this.props
		console.log(categories, status)
		switch (status) {
			case LOADING:
				return <Preloader margin={280} />
			case SUCCESS:
				return (
					<TouchableHighlight>
						<View style={ui.page}>
							{categories.categories.map(category => this.renderCategory(category))}
						</View>
					</TouchableHighlight>
				)
			case ERROR:
				return null
		}
	}

	render () {
		return (
			<ScrollView>
				{this.renderContent()}
			</ScrollView>
		)
	}
}

Category.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	fetchCategories: PropTypes.func.isRequired,
	categories: PropTypes.object.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired
}

export default Category
