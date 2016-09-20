import React, { Component, PropTypes } from 'react'
import { Image, TouchableHighlight, Animated } from 'react-native'
import plusIcon from './assets/plus.png'
import css from '../Icons.css'

export default class Plus extends Component {
	render () {
		return (
			<TouchableHighlight
				underlayColor='transparent'
				style={css.plus_minus}
				onPress={this.props.incrementRecipePortion}>
				<Image source={plusIcon} />
			</TouchableHighlight>
		)
	}
}

Plus.propTypes = {
	incrementRecipePortion: PropTypes.func.isRequired
}
