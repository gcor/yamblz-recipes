import React, { Component, PropTypes } from 'react'
import { ScrollView, InteractionManager } from 'react-native'
import Slider from '../../components/Slider'

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
		const { navigatePush, setCurrentRecipe } = this.props
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
			return (
				<ScrollView style={{marginTop: 60, backgroundColor: '#FAF9F7'}}>
					<Slider
						title={'Вы недавно смотрели'}
						id={'1'}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={this.props.lastViewedRecipes || []} />
					<Slider
						title={'Сохраненные'}
						id={'1'}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={this.props.historyRecipes || []} />
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
