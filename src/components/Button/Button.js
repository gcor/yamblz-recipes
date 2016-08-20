import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import css from './Button.css'

class Button extends Component {
	_onPressButton () {
		const { navigation, pushRoute } = this.props
		console.log(navigation.key)
		pushRoute({key: 'new'}, navigation.key)
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
	navigation: PropTypes.object.isRequired,
	pushRoute: PropTypes.func.isRequired
}

export default Button
