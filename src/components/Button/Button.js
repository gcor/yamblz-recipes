import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import css from './Button.css'

export default class Button extends Component {
	_onPressButton () {
		this.props.pushRoute('new')
		console.log(this.props.pushRoute)
	}
	render () {
		return (
			<View style={[css.button]}>
				<TouchableHighlight onPress={this._onPressButton.bind(this)}>
					<View style={css.button__icon} />
				</TouchableHighlight>
				<Text style={css.button__text}>{ this.props.text.toUpperCase() }</Text>
			</View>
		)
	}
}
