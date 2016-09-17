import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './ProductCard.css'

export default class ProductCard extends Component {
	render () {
		const { ingredient } = this.props
		return (
			<TouchableHighlight
				underlayColor='transparent'
				onPress={this.props.onProductClick.bind(this, ingredient.product._id)}
				>
				<View style={[css.productCard, this.props.style]}>
					<Image source={{uri: ingredient.product.image}} style={css.productCard__image} />
					<Text numberOfLines={1} style={css.productCard__title}>{ingredient.product.title}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}
ProductCard.propTypes = {
	onProductClick: PropTypes.func.isRequired,
	style: PropTypes.number,
	ingredient: PropTypes.object.isRequired
}
