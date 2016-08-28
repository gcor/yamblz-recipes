import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Image, InteractionManager } from 'react-native'
import Button from '../../components/Button'
import RecipeTabs from '../../components/RecipeTabs'
import css from './RecipeView.css'

export default class RecipeView extends Component {
	componentWillMount () {
		this.setState({isReady: false})
		InteractionManager.runAfterInteractions(() => {
			this.setState({isReady: true})
			const { fetchRecipes, currentRecipe } = this.props
			fetchRecipes(currentRecipe)
		})
	}
	_onPress () {
		this.props.navigatePush({key: 'Recipe', title: 'Процесс'})
	}

	renderTabs () {
		const { isReady } = this.state
		const { incrementRecipePortion, decrementRecipePortion } = this.props
		const imageSrc = 'http://' + this.props.recipe.image
		if (isReady) {
			return (
				<ScrollView style={{paddingTop: 55, backgroundColor: 'white'}}>
					<View style={css.recipe}>
						<Image source={{uri: imageSrc}} style={css.recipe__image} />
						<RecipeTabs
							onIncrement={incrementRecipePortion}
							onDecrement={decrementRecipePortion}
						/>
					</View>
				</ScrollView>
			)
		}
		return null
	}
	render () {
		console.log(this.props.recipe)
		return (
			<View style={{flex: 1}}>
				{this.renderTabs()}
				<Button
					onPress={this._onPress.bind(this)}
					text='Приготовить' />
			</View>
		)
	}
}

RecipeView.propTypes = {
	recipe: PropTypes.object.isRequired,
	fetchRecipes: PropTypes.func.isRequired,
	incrementRecipePortion: PropTypes.func.isRequired,
	decrementRecipePortion: PropTypes.func.isRequired,
	navigatePush: PropTypes.func.isRequired,
	currentRecipe: PropTypes.string.isRequired
}
