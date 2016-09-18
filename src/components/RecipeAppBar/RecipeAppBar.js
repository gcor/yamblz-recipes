import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './RecipeAppBar.css'
import { format3points } from '../../utils'

import BackBlackIcon from '../../icons/arrow.png'
import RecipeSpeech from '../RecipeSpeech'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class AppBar extends Component {

	render () {
		const { recipe, navigateBack } = this.props
		return (
			<View style={[css.bar, css.bar_centered, css.bar_white]}>
				<TouchableHighlight style={css.bar__hilight}
					underlayColor={underlayColor}
					onPress={navigateBack.bind(this)}>
					<Image style={css.bar__icon} source={BackBlackIcon} />
				</TouchableHighlight>
				<View style={css.bar__content}>
					<Text numberOfLines={2} style={[css.bar__title, css.bar__title_black]}>{recipe.title}</Text>
				</View>
				<RecipeSpeech />
			</View>
		)
	}
}

AppBar.propTypes = {
	navigateBack: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}
