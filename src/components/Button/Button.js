import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import css from './Button.css'

class Button extends Component {
	_onPressButton () {
		if (this.props.route) {
			const { navigationState, route } = this.props

		}
	}
	render () {
		return (
			<View style={[css.button]}>
				<TouchableHighlight onPress={this._onPressButton.bind(this)}>
					<View style={css.button__icon} />
				</TouchableHighlight>
				<Text style={css.button__text}>{this.props.text.toUpperCase()}</Text>
			</View>
		)
	}
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	navigationState: PropTypes.object.isRequired,
	route: PropTypes.string
}

export default Button
