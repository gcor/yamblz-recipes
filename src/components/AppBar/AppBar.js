import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image, Animated } from 'react-native'
import css from './AppBar.css'
import SearchIcon from '../../icons/search_w.png'
import SearchIconBlack from '../../icons/search.png'
import BackIcon from '../../icons/arrow_w.png'
import BackBlackIcon from '../../icons/arrow.png'
import Bookmark from '../Icons/Bookmark'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class AppBar extends Component {

	constructor () {
		super()
		this.state = { 
			translateY: new Animated.Value(0),
			backgroundColor: new Animated.Value(0),
			isBookmarkBlack: false
		}
	}

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

	componentWillReceiveProps (props) {
		switch (props.visible) {
			case 'white': 
				this.animateState(0)
				this.setState({isBookmarkBlack: true})
				break
			case 'transparent': this.animateState(0)
				this.setState({isBookmarkBlack: false})
				break
			case 'hidden': 
				this.animateState(-100)
				break
		}
	}

	animateState (translateY) {  
		Animated.timing(this.state.translateY, {
			toValue: translateY,
			duration: 500
		}).start()
	}

	renderHomeBar () {
		const { pushToHistory, pushToSearch, pushToCategory } = this.props
		const { translateY } = this.state

		var color = this.props.visible === 'white' ? 'black' : 'white'
		var elevation = this.props.visible === 'white' ? 3 : 0
		var backgroundColor = this.props.visible === 'white' ? 'white' : 'transparent'

		return (
			<Animated.View style={[
				css.bar, css.bar_centered, css.bar_shift, css.bar_absolute, {
					transform: [{translateY: translateY}],
					backgroundColor: backgroundColor,
					elevation: elevation
				}]}>
				<Bookmark navigationRole isBlack={this.state.isBookmarkBlack} />
				<TouchableHighlight style={css.bar__hilight} onPress={pushToCategory.bind(this, this.dayTime())}
					underlayColor={underlayColor}>
					<View style={[css.bar__category, {borderColor: color}]}>
						<Text style={[css.bar__time], {color: color}}>{this.dayTime()}</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight style={css.bar__hilight}
					onPress={pushToSearch.bind(this)}
					underlayColor={underlayColor}>
					<Image style={css.bar__icon} 
						source={this.props.visible === 'white' ? SearchIconBlack : SearchIcon} />
				</TouchableHighlight>
			</Animated.View>
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
				<Bookmark isFavourite={recipe.isFavourite} isBlack={false} />
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
