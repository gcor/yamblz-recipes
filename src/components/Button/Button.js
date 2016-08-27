import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import css from './Button.css'

class Button extends Component {
	render () {
		return (
			<TouchableHighlight
				underlayColor='yellow'
				onPress={this.props.onPress}
				style={[css.button, css.button_text_center]}
				>
				<Text style={css.button__text}>{this.props.text.toUpperCase()}</Text>
			</TouchableHighlight>
		)
	}
}

// <View style={css.button__icon} />

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func
}

export default Button
