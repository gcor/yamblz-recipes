import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './AppBar.css'
import SearchIcon from './assets/search.png'
import BookmarkIcon from './assets/bookmark.png'

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

    renderHomeBar() {
        const { pushToHistory, pushToSearch, pushToCategory } =  this.props
        return (
            <View style={[css.bar, css.bar_centered]}>
                <TouchableHighlight style={css.bar__hilight}
                    underlayColor='rgba(255,255,255,0.2)'
                    onPress={pushToHistory.bind(this)}>
                    <Image style={css.bar__icon} source={BookmarkIcon} />
                </TouchableHighlight>
                <TouchableHighlight style={css.bar__hilight} onPress={pushToCategory.bind(this, this.dayTime())}>
                    <View style={css.bar__category}
                        underlayColor='rgba(255,255,255,0.2)'>
                        <Text style={{color: 'white', fontSize: 16 }}>{this.dayTime()}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={css.bar__hilight}
                    onPress={pushToSearch.bind(this)}
                    underlayColor='rgba(255,255,255,0.2)'>
                    <Image style={css.bar__icon} source={SearchIcon} />
                </TouchableHighlight>
            </View>
        )
    }

    renderRecipeViewBar() {
        const { recipe, navigateBack, addToHistory } =  this.props
        return (
            <View style={css.bar}>
                <TouchableHighlight style={css.bar__hilight}
                    underlayColor='rgba(255,255,255,0.2)'
                    onPress={navigateBack.bind(this)}>
                    <Image style={css.bar__icon} source={BookmarkIcon} />
                </TouchableHighlight>

                <View style={css.bar__content}>
                    <Text style={css.bar__title}>{recipe.title}</Text>
                    <View style={css.bar__info}>
                        <Text style={css.bar__time}>
                            {this.getCookingTime(recipe.time)} ·
                        </Text>
                        <Text style={css.bar__energy}>{recipe.energy} ккал</Text>
                    </View>
                </View>

                <TouchableHighlight style={css.bar__hilight}
                    onPress={addToHistory.bind(this, this.props.recipe._id)}
                    underlayColor='rgba(255,255,255,0.2)'>
                    <Image style={css.bar__icon} source={BookmarkIcon} />
                </TouchableHighlight>
            </View>
        )
    }

    renderRecipe() {
        const { navigateBack } =  this.props
        return (
            <View>
            </View>
        )
    }

    render () {
        const { navigationState } =  this.props
        switch (navigationState.routes[navigationState.routes.length - 1].key) {
            case 'Home': return this.renderHomeBar()
            case 'RecipeView': return this.renderRecipeViewBar()
            case 'Recipe': return this.renderRecipe()
            default: return null
        }
    }

    getCookingTime (time) {
        if (time > 60) return ~~(time / 60) + ' час ' + (time % 60) + ' мин'
        else return time + ' мин'
    }
}

AppBar.propTypes = {
    pushToHistory: PropTypes.func.isRequired,
    pushToSearch: PropTypes.func.isRequired,
    pushToCategory: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired,
    addToHistory: PropTypes.func.isRequired
}
