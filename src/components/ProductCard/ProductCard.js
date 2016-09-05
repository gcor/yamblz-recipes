import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './ProductCard.css'

export default class ProductCard extends Component {
	render () {
		return (
			<TouchableHighlight
				underlayColor='transparent'
				onPress={this.props.onProductClick.bind(this, this.props.ingredient.product._id)}
				>
				<View style={[css.productCard, this.props.style]}>
					<View>
						<Image source={{uri: this.props.ingredient.product.image}} style={css.productCard__image} />
					</View>
					<Text numberOfLines={1} style={css.productCard__title}>{this.props.ingredient.product.title}</Text>
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
