import React, { Component, PropTypes } from 'react'
import {
	ScrollView,
	View,
	Image,
	InteractionManager
} from 'react-native'
import Button from '../../components/Button'
import IngredientList from '../../components/IngredientList'
import ExtraProducts from '../../components/ExtraProducts'
import ToolsList from '../../components/ToolsList'
import css from './RecipeView.css'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import Preloader from '../../components/Preloader'

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

	renderIngredientList () {
		const { status } = this.props.recipe
		const { incrementRecipePortion,
						decrementRecipePortion,
						setProductAsMain,
						addToHistory,
						setProductAsExtra } = this.props
		const imageSrc = 'http://' + this.props.recipe.image

		switch (status) {
			case LOADING: return (
				<Preloader margin={80} />
			)
			case SUCCESS: return (
				<View style={css.recipe}>
					<Image source={{uri: imageSrc}} style={css.recipe__image} />
					<Button
						onPress={addToHistory.bind(this, this.props.recipe._id)}
						text='Добавить в избранное'
						/>
					<IngredientList
						tabLabel='Продукты'
						onDecrement={decrementRecipePortion}
						onIncrement={incrementRecipePortion}
						setExtra={setProductAsExtra}
						recipe={this.props.recipe}
					/>
					<ExtraProducts
						title={'можно добавить'}
						id={'1'}
						setMain={setProductAsMain}
						recipe={this.props.recipe} />
					<ToolsList
						title={'Вам может понадобиться'}
						tools={['Ёмкость для запекания', 'Нож', 'Разделочная доска']}
						/>
				</View>
			)
			case ERROR: return 'Сломалось или нет Интернета'
		}
	}

	renderContent () {
		const { isReady } = this.state
		if (isReady) {
			return (
				<ScrollView style={{backgroundColor: 'white'}}>
					{this.renderIngredientList()}
				</ScrollView>
			)
		}
		return null
	}

	render () {
		return (
			<View style={{flex: 1}}>
				{this.renderContent()}
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
	addToHistory: PropTypes.func.isRequired,
	setProductAsMain: PropTypes.func.isRequired,
	setProductAsExtra: PropTypes.func.isRequired,
	navigatePush: PropTypes.func.isRequired,
	currentRecipe: PropTypes.string.isRequired,
	resetRecipe: PropTypes.func.isRequired
}
