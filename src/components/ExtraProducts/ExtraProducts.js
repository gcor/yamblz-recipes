import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import ProductCard from '../ProductCard'
import css from './ExtraProducts.css'

class ExtraProducts extends Component {
	constructor (props) {
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: ds.cloneWithRows(this.props.products)
		}
	}
	render () {
		return (
			<View style={css.extraProducts}>
				<Text style={css.extraProducts__title}>{this.props.title.toUpperCase()}</Text>
				<ListView
					horizontal
					showsHorizontalScrollIndicator={false}
					dataSource={this.state.dataSource}
					renderRow={this._renderProductCard.bind(this)}
				/>
			</View>
		)
	}
	_renderProductCard (cardData) {
		return (
			<ProductCard
				data={cardData}
				// onPressHandler={this.props.onPressHandler}
				style={css.extraProducts__item}
			/>
		)
	}
}

ExtraProducts.propTypes = {
	// onPressHandler: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	products: PropTypes.array.isRequired
}

export default ExtraProducts
