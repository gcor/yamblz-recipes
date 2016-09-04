import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './ProductCard.css'

export default class ProductCard extends Component {
	render () {
		const { data } = this.props
		const { title, image } = data
		return (
			<TouchableHighlight
				underlayColor='transparent'
				>
				<View style={[css.productCard, this.props.style]}>
					<View>
						<Image source={{uri: image}} style={css.productCard__image} />
					</View>
					<Text numberOfLines={1} style={css.productCard__title}>{title}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
ProductCard.propTypes = {
	// onPressHandler: PropTypes.func.isRequired,
	style: PropTypes.number,
	data: PropTypes.object.isRequired
}
