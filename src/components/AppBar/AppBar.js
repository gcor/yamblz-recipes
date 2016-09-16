import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './AppBar.css'
import SearchIcon from './assets/search.png'
import BackIcon from './assets/back.png'
import BackBlackIcon from '../../icons/arrow.png'
import Bookmark from '../Icons/Bookmark'
import RecipeSpeech from '../RecipeSpeech'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class AppBar extends Component {

	dayTime () {
		let dayTime
		const now = (new Date()).getHours()
		if (now > 3 && now <= 11) {
			dayTime = 'Завтрак'
		} else if (now > 11 && now <= 17) {
			dayTime = 'Обед'
		} else dayTime = 'Ужин'
		return dayTime
	}

	renderHomeBar () {
		const { pushToHistory, pushToSearch, pushToCategory } = this.props
		return (
			<View style={[css.bar, css.bar_centered, css.bar_shift, css.bar_absolute]}>
				<Bookmark navigationRole />
				<TouchableHighlight style={css.bar__hilight} onPress={pushToCategory.bind(this, this.dayTime())}>
					<View style={css.bar__category}
						underlayColor={underlayColor}>
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
		const { recipe, navigateBack, addToHistory, removeFromHistory } = this.props
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
								{this.getCookingTime(time)} ·
						</Text>
						<Text style={css.bar__energy}>{energy} ккал</Text>
					</View>
				</View>
				<Bookmark />
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

	getCookingTime (time) {
		if (time > 60) return ~~(time / 60) + ' час ' + (time % 60) + ' мин'
		else return time + ' мин'
	}

	addToHistory () {
		const {addToHistory, removeFromHistory, recipe} = this.props
		if (recipe.isFavourite) {
			removeFromHistory.call(this, recipe._id)
			recipe.isFavourite = false
			this.setState({addToHistoryButtonText: 'Добавить в избранное'})
		} else {
			addToHistory.call(this, recipe._id)
			recipe.isFavourite = true
			this.setState({addToHistoryButtonText: 'Удалить из избранного'})
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
