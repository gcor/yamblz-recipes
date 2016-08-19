import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import css from './Button.css'

export default class Button extends Component {
	_onPressButton(){
		this.props.pushRoute('new');
	}
	render() {
		return (
			<View style={[css.button/*, css.button_text_center*/]}>
				<TouchableHighlight onPress={this._onPressButton}>
					<View style={css.button__icon}></View>
			    </TouchableHighlight>
				<Text style={css.button__text}>{ this.props.text.toUpperCase() }</Text>
			</View>
		)
	}
}