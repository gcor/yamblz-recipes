import React, { Component, PropTypes } from 'react'
import {
	ScrollView,
	View,
	Image,
	Text,
	ListView,
	InteractionManager
} from 'react-native'
import Button from '../../components/Button'
import IngredientList from '../../components/IngredientList'
import ExtraProducts from '../../components/ExtraProducts'
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
		const { incrementRecipePortion, decrementRecipePortion } = this.props
		const imageSrc = 'http://' + this.props.recipe.image
		const products = [
			{
				title: 'Перец черный молотый',
				image: 'http://img3.board.com.ua/a/2004653239/wm/1-perets-chernyij-dushistyij-belyij-chili.jpg'
			},
			{
				title: 'Тимьян',
				image: 'http://r-azbuka.ru/img_catalog/preview/1437149732.jpg'
			},
			{
				title: 'Лавровый лист',
				image: 'http://expertpokozhe.ru/wp-content/uploads/2016/02/Lavrovyj-list-dlja-lechenija-pryshhej.jpg'
			}
		]
		switch (status) {
			case LOADING: return (
				<Preloader margin={80} />
			)
			case SUCCESS: return (
				<View style={css.recipe}>
					<Image source={{uri: imageSrc}} style={css.recipe__image} />
					<IngredientList
						tabLabel='Продукты'
						onDecrement={decrementRecipePortion}
						onIncrement={incrementRecipePortion}
						recipe={this.props.recipe}
					/>
					<ExtraProducts
						title={'можно добавить'}
						id={'1'}
						products={products} />
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
	navigatePush: PropTypes.func.isRequired,
	currentRecipe: PropTypes.string.isRequired,
	resetRecipe: PropTypes.func.isRequired
}
