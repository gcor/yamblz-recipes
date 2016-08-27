import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './Card.css'

// <View style={css.card__image}></View>

export default class Card extends Component {
	render () {
		const { data } = this.props
		const { title, complexity, time, energy, image } = data
		return (
			<TouchableHighlight
				underlayColor='transparent'
				onPress={this.props.onPressHandler}
				>
				<View style={[css.card, this.props.style]}>
					<View style={css.card__preview}>
						<Image source={{uri: image}} style={css.card__image} />
					</View>
					<Text style={css.card__title}>{title}</Text>
					<View style={css.card__description}>
						<View style={css.card__side}>
							<Text style={css.card__text}>{time}</Text>
							<Text style={css.card__divider}>.</Text>
							<Text style={css.card__text}>{complexity}</Text>
						</View>
						<View style={css.card__side}>
							<Text style={[css.card__text, css.card__text_right]}>{energy}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

Card.propTypes = {
	onPressHandler: PropTypes.func.isRequired,
	styles: PropTypes.object
}
