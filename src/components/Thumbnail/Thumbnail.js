import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import css from './Thumbnail.css'

export default class Thumbnail extends Component {
	render () {
		return (
			<View style={[css.thumbnail, this.props.style]}>
				<View style={css.thumbnail__description}>
					<Text style={css.thumbnail__title}>{this.props.data.title.toUpperCase()}</Text>
					<Text style={css.thumbnail__text}>{this.props.data.recipeAmount}</Text>
				</View>
				<View style={css.thumbnail__image}></View>
			</View>
		)
	}
}
