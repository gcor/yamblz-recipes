import React, { Component, PropTypes } from 'react'
import { View, ScrollView, InteractionManager } from 'react-native'
import ui from '../../constants/css'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import Preloader from '../../components/Preloader'
import Card from '../../components/Card/Card'
import css from './Category.css'

class Category extends Component {
	componentWillMount () {
		this.setState({isReady: false})
		InteractionManager.runAfterInteractions(() => {
			const { currentCategory } = this.props
			this.props.fetchCategory(currentCategory)
			this.setState({isReady: true})
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
	renderRecipe (recipe) {
		return (
			<Card
				key={recipe._id}
				data={recipe}
				id={recipe._id}
				onPressHandler={this._onCardPress.bind(this)}
				style={css.card}
				style_image={css.card__image}
			/>
		)
	}
	_onCardPress (recipeID) {
		const { navigatePush, setCurrentRecipe } = this.props
		setCurrentRecipe(recipeID)
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}

	renderContent () {
		const { status, category } = this.props
		switch (status) {
			case LOADING:
				return <Preloader margin={280} />
			case SUCCESS:
				return (
					<View style={ui.page}>
						{category.recipes.map(recipe => this.renderRecipe(recipe))}
					</View>
				)
			case ERROR:
				return null
		}
	}
	render () {
		if (this.state.isReady) {
			return (
				<ScrollView style={{marginTop: 16, backgroundColor: '#FAF9F7'}}>
					{this.renderContent()}
				</ScrollView>
			)
		} else return null
	}
}

Category.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	fetchCategory: PropTypes.func.isRequired,
	categories: PropTypes.object.isRequired,
	currentCategory: PropTypes.string,
	setCurrentRecipe: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired
}

export default Category
