import React, { Component, PropTypes } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import plusIcon from './assets/minus.png'
import css from '../Icons.css'

export default class Plus extends Component {
	render () {
		return (
			<TouchableHighlight
				underlayColor='transparent'
				style={css.plus_minus}
				onPress={this.props.decrementRecipePortion}>
				<Image source={plusIcon} />
			</TouchableHighlight>
		)
	}
}

Plus.propTypes = {
	decrementRecipePortion: PropTypes.func.isRequired
}
