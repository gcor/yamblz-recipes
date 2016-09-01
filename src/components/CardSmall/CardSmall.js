import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import css from './CardSmall.css'

export default class CardSmall extends Component {
	render () {
		const { title, amount, image } = this.props
		return (
			<TouchableHighlight
				onPress={this.props.onCategoryPress}
				underlayColor='transparent'
				style={css.cardSmall}>
				<View style={css.cardSmall__container}>
					<Image style={css.cardSmall__image} source={{uri: image}} />
					<LinearGradient colors={['rgba(0,0,0,.36)', 'transparent']} style={css.cardSmall__backgroundShadow}>
						<Text style={css.cardSmall__title}>{title}</Text>
						<Text style={css.cardSmall__amount}>{amount} рецептов</Text>
					</LinearGradient>
				</View>
			</TouchableHighlight>
		)
	}
}

CardSmall.propTypes = {
	title: PropTypes.string,
	amount: PropTypes.number,
	image: PropTypes.string,
	onCategoryPress: PropTypes.func
}
