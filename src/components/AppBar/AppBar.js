import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './AppBar.css'
import SearchIcon from '../../icons/search_w.png'
import BackIcon from '../../icons/arrow_w.png'
import Bookmark from '../Icons/Bookmark'
import * as utils from '../../utils'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class AppBar extends Component {

	shouldComponentUpdate (nextProps) {
		return this.props.visible !== nextProps.visible
	}

	dayTime () {
		let dayTime
		const currentHours = (new Date()).getHours()
		if (currentHours > 3 && currentHours <= 11) {
			dayTime = 'Завтрак'
		} else if (currentHours > 11 && currentHours <= 17) {
			dayTime = 'Обед'
		} else dayTime = 'Ужин'
		return dayTime
	}

	renderHomeBar () {
		const { pushToHistory, pushToSearch, pushToCategory } = this.props
		
		return (
			<View style={[css.bar, css.bar_centered, css.bar_shift, css.bar_absolute]}>
				<Bookmark navigationRole />
				<TouchableHighlight style={css.bar__hilight} onPress={pushToCategory.bind(this, this.dayTime())}
					underlayColor={underlayColor}>
					<View style={css.bar__category}>
						<Text style={css.bar__time}>{this.dayTime()}</Text>
					</View>
  				</TouchableHighlight>
  				<TouchableHighlight style={css.bar__hilight}
  					onPress={pushToSearch.bind(this)}
  					underlayColor={underlayColor}>
					<Image style={css.bar__icon} source={SearchIcon} />
  				</TouchableHighlight>
			</View>
		)
	}

	renderRecipeViewBar () {
		const { recipe, navigateBack, addToSavedRecipes, removeFromSavedRecipes } = this.props
		const { title, time, energy } = recipe
		if (!title) return null
		return (
			<View style={[css.bar, css.bar_shift, css.bar_absolute]}>
				<TouchableHighlight style={css.bar__hilight}
					underlayColor={underlayColor}
					onPress={navigateBack.bind(this)}>
					<Image style={css.bar__icon} source={BackIcon} />
				</TouchableHighlight>

				<View style={css.bar__content}>
					<Text style={css.bar__title}>{title}</Text>
					<View style={css.bar__info}>
						<Text style={css.bar__time}>
								{utils.getCookingTime(time)} ·
						</Text>
						<Text style={css.bar__energy}>{energy} ккал</Text>
					</View>
				</View>
				<Bookmark isFavourite={recipe.isFavourite} />
			</View>
		)
	}

	render () {
		const { navigationState } = this.props
		switch (navigationState.routes[navigationState.routes.length - 1].key) {
			case 'Home': return this.renderHomeBar()
			case 'RecipeView': return this.renderRecipeViewBar()
			default: return null
		}
	}

	addToSavedRecipes () {
		const {addToSavedRecipes, removeFromSavedRecipes, recipe} = this.props
		if (recipe.isFavourite) {
			removeFromSavedRecipes.call(this, recipe._id)
			recipe.isFavourite = false
			this.setState({addToSavedRecipesButtonText: 'Добавить в избранное'})
		} else {
			addToSavedRecipes.call(this, recipe._id)
			recipe.isFavourite = true
			this.setState({addToSavedRecipesButtonText: 'Удалить из избранного'})
		}
	}
}

AppBar.propTypes = {
	pushToHistory: PropTypes.func.isRequired,
	pushToSearch: PropTypes.func.isRequired,
	pushToCategory: PropTypes.func.isRequired,
	navigateBack: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
	navigationState: PropTypes.object.isRequired
}
