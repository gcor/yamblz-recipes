import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import ProductCard from '../ProductCard'
import css from './ExtraProducts.css'

class ExtraProducts extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const unrequiredProducts = this.props.recipe.ingredients.filter(item => item.isMain === false)
		this.state = {
			list: this.ds.cloneWithRows(unrequiredProducts)
		}
	}
	componentWillReceiveProps (props) {
		const unrequiredProducts = this.props.recipe.ingredients.filter(item => item.isMain === false)
		this.setState({
			list: this.ds.cloneWithRows(unrequiredProducts)
		})
	}
	render () {
		if (this.state.list._cachedRowCount) {
			return (
				<View style={css.extraProducts}>
					<Text style={css.extraProducts__title}>{this.props.title.toUpperCase()}</Text>
					<ListView
						horizontal
						enableEmptySections
						showsHorizontalScrollIndicator={false}
						dataSource={this.state.list}
						renderRow={this._renderProductCard.bind(this)}
					/>
				</View>
			)
		} else {
			return false
		}
	}
	_renderProductCard (cardData) {
		return (
			<ProductCard
				ingredient={cardData}
				onProductClick={this.props.setMain}
				style={css.extraProducts__item}
			/>
		)
	}
}

ExtraProducts.propTypes = {
	setMain: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	recipe: PropTypes.object.isRequired
}

export default ExtraProducts
