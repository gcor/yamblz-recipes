import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import css from './Button.css'

export default class Button extends Component {
	render() {
		return (
			<View style={[css.button/*, css.button_text_center*/]}>
				<View style={css.button__icon}></View>
				<Text style={css.button__text}>{ this.props.text.toUpperCase() }</Text>
			</View>
		)
	}
}