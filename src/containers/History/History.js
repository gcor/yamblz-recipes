import React, { Component, PropTypes } from 'react'
import { ScrollView, NativeModules, InteractionManager } from 'react-native'
import Slider from '../../components/Slider'
import * as _ from 'lodash'
const AppMetrica = NativeModules.AppMetrika

export default class History extends Component {
	componentWillMount () {
		this.setState({isReady: false})
		InteractionManager.runAfterInteractions(() => {
			this.props.fetchHistory()
			this.props.fetchLastViewed()
			this.setState({isReady: true})
		})
		console.log(this.props) // приходит [] и undefined. why?
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
	render () {
		const { isReady } = this.state
		if (isReady) {
			const { lastViewedRecipes, historyRecipes } = this.props
			return (
				<ScrollView style={{marginTop: 60, backgroundColor: '#FAF9F7'}}>
					<Slider
						title={'Вы недавно смотрели'}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={lastViewedRecipes} />
					<Slider
						title={'Сохраненные'}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={historyRecipes || []} />
				</ScrollView>
			)
		}
		return null
	}
}

History.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	fetchHistory: PropTypes.func.isRequired,
	fetchLastViewed: PropTypes.func.isRequired,
	lastViewedRecipes: PropTypes.array.isRequired,
	historyRecipes: PropTypes.array.isRequired
}
