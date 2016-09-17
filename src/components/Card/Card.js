import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './Card.css'
import * as utils from '../../utils'

export default class Card extends Component {
	/**
	*	format cooking time
	* @param {Number} minutes
	* @returns {String} hours + pronunciation + minutes (2 часа 20 мин)
	*/
	getCookingTime (time) {
		var hours = ~~(time / 60)
		var minutes = time % 60
		var hoursPronunciation = utils.pronunciation(hours, ['час', 'часа', 'часов'])
		if (time > 60) return hours + ` ${hoursPronunciation} ` + minutes + ' мин'
		return time + ' мин'
	}
	render () {
		const { data, isFullWidth } = this.props
		const { title, time, energy, image, _id: recipeID } = data
		const cardCSS = (isFullWidth) ? css.card : [css.card, css.card_type_slider]
		const cardImageCSS = (isFullWidth) ? css.card__image : [css.card__image, css.card__image_type_slider]

		return (
			<TouchableHighlight
				underlayColor='transparent'
				onPress={this.props.onPressHandler.bind(this, recipeID)}
				>
				<View style={cardCSS}>
					<Image source={{uri: image}} style={cardImageCSS} />
					<Text numberOfLines={1} style={css.card__title}>{title}</Text>
					<View style={css.card__description}>
						<View style={css.card__side}>
							<Text style={css.card__text}>{this.getCookingTime(time)}</Text>
							<Text style={[css.card__text, css.card__point]}>·</Text>
							<Text style={css.card__text}>{energy} ккал</Text>
						</View>
						<View style={css.card__side}>
							<Text style={[css.card__text, css.card__text_right]}></Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
Card.propTypes = {
	onPressHandler: PropTypes.func.isRequired,
	isFullWidth: PropTypes.bool,
	data: PropTypes.object.isRequired
}
