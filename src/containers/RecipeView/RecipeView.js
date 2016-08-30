import React, { Component, PropTypes } from 'react'
import {
	ScrollView,
	View,
	Image,
	InteractionManager,
	Text,
	ActivityIndicator
} from 'react-native'
import Button from '../../components/Button'
import RecipeTabs from '../../components/RecipeTabs'
import css from './RecipeView.css'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import { yellow } from '../../constants/css'

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

	componentWillUnmount () {
		this.props.resetRecipe()
	}

	renderTabs () {
		const { isReady } = this.state
		const imageSrc = 'http://' + this.props.recipe.image
		if (isReady) {
			return (
				<ScrollView style={{paddingTop: 55, backgroundColor: 'white'}}>
					<View style={css.recipe}>
						<Image source={{uri: imageSrc}} style={css.recipe__image} />
						{this.renderContent()}
					</View>
				</ScrollView>
			)
		}
		return null
	}

	renderContent () {
		const { incrementRecipePortion, decrementRecipePortion } = this.props
		const { status } = this.props.recipe
		switch (status) {
			case LOADING: return (
				<ActivityIndicator
					animating
					color={yellow}
					size='large'
				/>
			)
			case SUCCESS: return (
				<RecipeTabs
					onIncrement={incrementRecipePortion}
					onDecrement={decrementRecipePortion}
				/>
			)
			case ERROR: return 'Сломалось или нет Интернета'
		}
	}

	render () {
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
	currentRecipe: PropTypes.string.isRequired,
	resetRecipe: PropTypes.func.isRequired
}
