import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './Card.css'

export default class Card extends Component {
	getCookingTime (time) {
		if (time > 60) return ~~(time / 60) + ' час ' + (time % 60) + ' мин'
		else return time + ' мин'
	}

	render () {
		const { data } = this.props
		const { title, time, energy, image, _id: recipeID } = data
		return (
			<TouchableHighlight
				underlayColor='transparent'
				onPress={this.props.onPressHandler.bind(this, recipeID)}
				>
				<View style={[css.card, this.props.style]}>
					<View>
						<Image source={{uri: image}} style={css.card__image} />
					</View>
					<Text numberOfLines={1} style={css.card__title}>{title}</Text>
					<View style={css.card__description}>
						<View style={css.card__side}>
							<Text style={css.card__text}>{this.getCookingTime(time)}  ·  </Text>
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
	style: PropTypes.number,
	data: PropTypes.object.isRequired
}
