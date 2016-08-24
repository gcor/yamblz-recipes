import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import css from './Quantifier.css'

export default class Quantifier extends Component {
	render () {
		return (
			<TouchableHighlight onPress={this._onPressButton}>
				<View style={css.quantifier}>
					<Text style={css.quantifier__quantity}> {this.props.ingredient.quantity} </Text>
					<Text style={css.quantifier__measure}> {this.props.ingredient.measure} </Text>
					<Text style={css.quantifier__arrow}>&#x25BC;</Text>
				</View>
			</TouchableHighlight>
		)
	}
	__onQuantifierPress = () => {
	}
}
