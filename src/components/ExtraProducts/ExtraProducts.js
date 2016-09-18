import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import ProductCard from '../ProductCard'
import css from './ExtraProducts.css'

export default class ExtraProducts extends Component {
	constructor (props) {
		super(props)
		const {recipe} = this.props
		const unrequiredProducts = recipe.ingredients.filter(item => item.isMain === false)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			list: this.ds.cloneWithRows(unrequiredProducts)
		}
	}
	componentWillReceiveProps (props) {
		const {recipe} = this.props
		const unrequiredProducts = recipe.ingredients.filter(item => item.isMain === false)
		this.setState({
			list: this.ds.cloneWithRows(unrequiredProducts)
		})
	}
	render () {
		if (this.state.list._cachedRowCount) { // _cachedRowCount - кол-во элементов
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
		}
		return null
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
