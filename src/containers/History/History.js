import React, { Component, PropTypes } from 'react'
import { Text, ScrollView, NativeModules, InteractionManager } from 'react-native'
import Slider from '../../components/Slider'
import * as _ from 'lodash'
const AppMetrica = NativeModules.AppMetrika
import css from './History.css'

export default class History extends Component {
	componentWillMount () {
		this.setState({isReady: false})
		InteractionManager.runAfterInteractions(() => {
			this.props.fetchSavedRecipes()
			this.props.fetchLastViewed()
			this.setState({isReady: true})
		})
	}
	_onCardPress (recipeID) {
		const {
			navigatePush,
			setCurrentRecipe,
			lastViewedRecipes,
			historyRecipes
		} = this.props
		const addFromLast = _.find(lastViewedRecipes, {'_id': recipeID})
		const addFromFavourite = _.find(historyRecipes, {'_id': recipeID})
		if (addFromLast) {
			AppMetrica.openRecipeFromLast(JSON.stringify({
				title: addFromLast.title,
				id: recipeID
			}))
		}
		if (addFromFavourite) {
			AppMetrica.openRecipeFromFavourite(JSON.stringify({
				title: addFromFavourite.title,
				id: recipeID
			}))
		}
		setCurrentRecipe(recipeID)
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}
	_onCategoryPress () {
		const { navigatePush } = this.props
		navigatePush({
			key: 'Category',
			title: 'Сохраненные'
		})
	}
	_renderLastViewed (lastViewedRecipes) {
		if (lastViewedRecipes.length > 0) {
			return (
				<Slider
					title={'Вы недавно смотрели'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={lastViewedRecipes} />
			)
		}
	}
	_renderHistory (historyRecipes) {
		if (historyRecipes.length > 0) {
			return (
				<Slider
					title={'Сохраненные'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={historyRecipes} />
			)
		} else {
			return (<Text style={css.emptytext}>Здесь будут ваши сохраненные рецепты</Text>)
		}
	}
	render () {
		const { isReady } = this.state
		if (isReady) {
			const { lastViewedRecipes, historyRecipes } = this.props
			if (lastViewedRecipes.length === 0 && historyRecipes.length === 0) {
				return (
					<ScrollView style={css.page}>
						<Text style={css.emptytext}>Здесь будут ваши сохраненные и&nbsp;недавно просмотренные рецепты</Text>
					</ScrollView>
				)
			}
			return (
				<ScrollView style={css.page}>
					{this._renderLastViewed(lastViewedRecipes)}
					{this._renderHistory(historyRecipes)}
				</ScrollView>
			)
		}
		return null
	}
}

History.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	fetchSavedRecipes: PropTypes.func.isRequired,
	fetchLastViewed: PropTypes.func.isRequired,
	lastViewedRecipes: PropTypes.array.isRequired,
	historyRecipes: PropTypes.array.isRequired
}
