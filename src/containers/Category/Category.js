import React, { Component, PropTypes } from 'react'
import { View, ScrollView, InteractionManager } from 'react-native'
import Slider from '../../components/Slider'
import ui from '../../constants/css'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import Preloader from '../../components/Preloader'
import Card from '../../components/Card/Card'
import css from './Category.css'

class Category extends Component {
	componentWillMount () {
		this.setState({isReady: false})
		InteractionManager.runAfterInteractions(() => {
			this.props.fetchCategory('57bfe68c624944001682a016')
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
	// renderCategory (category) {
	// 	const { title, id, recipes } = category
	// 	return (
	// 		<Slider
	// 			title={title}
	// 			key={id} id={id}
	// 			onPressHandler={this._onPressHandler.bind(this)}
	// 			recipes={recipes} />
	// 	)
	// }
	renderRecipe (recipe) {
		return (
			<Card
				key={recipe._id}
				data={recipe}
				id={recipe._id}
				onPressHandler={this._onCardPress.bind(this)}
				style={css.card}
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
		console.log(category, status)
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
// {categories.categories.map(category => this.renderCategory(category))}
	render () {
		if (this.state.isReady) {
			return (
				<ScrollView style={{paddingTop: 16, paddingBottom: 16, backgroundColor: '#FAF9F7'}}>
					{this.renderContent()}
				</ScrollView>
			)
		} else return null
	}
}

Category.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	// fetchCategories: PropTypes.func.isRequired,
	fetchCategory: PropTypes.func.isRequired,
	categories: PropTypes.object.isRequired,
	// category: PropTypes.array.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired
}

export default Category
