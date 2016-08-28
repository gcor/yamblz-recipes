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
			this.props.fetchRecipes('57bf5e6c23a24aae1483a36c')
		})
		console.log('recipeVIEW', this.props.recipeID)
	}
	_onPress () {
		this.props.navigatePush({
			key: 'Recipe',
			title: 'Процесс'
		})
	}
	onIncrement () {
		this.props.incrementRecipePortion('57bf5e6c23a24aae1483a36c')
	}
	onDecrement () {
		this.props.decrementRecipePortion('57bf5e6c23a24aae1483a36c')
	}

	renderTabs () {
		const { isReady } = this.state
		const imageSrc = 'http://' + this.props.recipe.image
		if (isReady) {
			return (
				<ScrollView style={{paddingTop: 55, backgroundColor: 'white'}}>
					<View style={css.recipe}>
						<Image source={{uri: imageSrc}} style={css.recipe__image} />
						<RecipeTabs
							onDecrement={this.onDecrement.bind(this)}
							onIncrement={this.onIncrement.bind(this)}
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
	navigatePush: PropTypes.func.isRequired
}
