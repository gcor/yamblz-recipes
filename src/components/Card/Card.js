import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import css from './Card.css';

export default class Card extends Component {
	render() {
		return (
			<View style={[css.card, this.props.style]}>
				<View style={css.card__preview}>
					<View style={css.card__image}></View>
					<View style={css.card__stars}>
						<View style={[css.card__star, css.card__star_active]}></View>
						<View style={[css.card__star, css.card__star_active]}></View>
						<View style={[css.card__star, css.card__star_active]}></View>
						<View style={[css.card__star, css.card__star_active]}></View>
						<View style={[css.card__star, css.card__star_active]}></View>
					</View>
				</View>
				<Text style={css.card__title}>{this.props.data.title}</Text>
				<View style={css.card__description}>
					<View style={css.card__side}>
						<Text style={css.card__text}>{this.props.data.time}</Text>
						<Text style={css.card__divider}>.</Text>
						<Text style={css.card__text}>{this.props.data.complexity}</Text>
					</View>
					<View style={css.card__side}>
						<Text style={[css.card__text, css.card__text_right]}>{this.props.data.energy}</Text>
					</View>
				</View>
			</View>
		)
	}
}