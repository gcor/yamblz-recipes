import React, { Component, PropTypes } from 'react'
import { View, TouchableHighlight, Animated } from 'react-native'
import plusIcon from './assets/minus.png'
import css from '../Icons.css'

export default class Plus extends Component {
	constructor () {
		super()
		this.handlePress = this.handlePress.bind(this)
		this.state = {
			scale: new Animated.Value(1)
		}
	}
	handlePress () {
		this.props.decrementRecipePortion()
		Animated.sequence([
			Animated.timing(this.state.scale, {
				toValue: 1.4,
				duration: 100
			}),
			Animated.timing(this.state.scale, {
				toValue: 1,
				duration: 100
			})
		]).start()
	}
	render () {
		return (
			<TouchableHighlight
				underlayColor='transparent'
				style={css.plus_minus}
				onPress={this.handlePress}>
				<Animated.Image
					style={{transform: [{scale: this.state.scale}]}}
					source={plusIcon}
				/>
			</TouchableHighlight>
		)
	}
}

Plus.propTypes = {
	decrementRecipePortion: PropTypes.func.isRequired
}
