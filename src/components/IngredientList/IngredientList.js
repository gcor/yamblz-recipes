import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, Image } from 'react-native'
import { pronunciation } from '../../utils'
import css from './IngredientList.css'

export default class IngredientList extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const requiredProducts = this.props.recipe.ingredients.filter(item => item.extra === false)
		const extraProducts = this.props.recipe.ingredients.filter(item => item.extra === true && item.isMain === true)
		this.state = {
			list: this.ds.cloneWithRows(requiredProducts),
			extra: this.ds.cloneWithRows(extraProducts)
		}
	}
	componentWillReceiveProps (props) {
		const requiredProducts = this.props.recipe.ingredients.filter(item => item.extra === false)
		const extraProducts = this.props.recipe.ingredients.filter(item => item.extra === true && item.isMain === true)
		this.setState({
			list: this.ds.cloneWithRows(requiredProducts),
			extra: this.ds.cloneWithRows(extraProducts)
		})
	}
	getAmount (amount, measure, baseMeasure) {
		const unaltered = amount + ' ' + measure
		if (!amount) return 'по вкусу'
		switch (measure) {
			case 'пучок':
				return amount + ' ' + pronunciation(Math.ceil(amount), ['пучок', 'пучка', 'пучков'])
			case 'зубчик':
				return amount + ' ' + pronunciation(Math.ceil(amount), ['зубчик', 'зубчика', 'зубчиков'])
			case 'стебель':
				return amount + ' ' + pronunciation(Math.ceil(amount), ['стебель', 'стебля', 'стеблей'])
			case 'гр':
				if (amount >= 1000) {
					return (amount / 1000).toFixed(1) + ' ' + 'кг'
				} else {
					return unaltered
				}
			case 'мл':
				if (amount >= 1000) {
					return (amount / 1000).toFixed(1) + ' ' + 'л'
				} else {
					return unaltered
				}
			case 'ст.л.':
				if (amount >= 14) {
					return (amount / 14).toFixed(1) + ' ' + 'стак.'
				} else {
					return unaltered
				}
			case 'стак.':
				if (baseMeasure === 'гр') {
					return (amount >= 5) ? (amount / 5).toFixed(1) + ' ' + 'кг' : unaltered
				}
				if (baseMeasure === 'мл') {
					return (amount >= 5) ? (amount / 5).toFixed(1) + ' ' + 'л' : unaltered
				}
				break
			default:
				return unaltered
		}
	}

	render () {
		return (
			<View>
				<View style={css.ingredients}>
					<View style={css.portions}>
						<View style={{}}>
							<Text style={css.portions__text}> Порции </Text>
						</View>
						<View style={css.portions__controls}>
							<Text style={[css.controls__button, css.portions__text]} onPress={this.props.onDecrement}> - </Text>
							<Text style={[css.controls__value, css.portions__text]}> {this.props.recipe.portion} </Text>
							<Text style={[css.controls__button, css.portions__text]} onPress={this.props.onIncrement}> + </Text>
						</View>
					</View>
					<ListView
						enableEmptySections
						dataSource={this.state.list}
						renderRow={this._renderIngredient.bind(this)}
					/>
				</View>
				<View style={css.extraIngredients}>
					<ListView
						enableEmptySections
						dataSource={this.state.extra}
						renderRow={this._renderIngredient.bind(this)}
					/>
				</View>
			</View>
		)
	}
	_renderCloseButton (isVisible, id) {
		if (isVisible) {
			return (
				<Text style={css.closeButton} onPress={this.props.setExtra.bind(this, id)}> X </Text>
			)
		} else return false
	}
	_renderIngredient = ingredient => {
		const ingredientStyle = (ingredient.extra === false) ? css.ingredients__item : css.extraIngredients__item
		return (
			<View style={ingredientStyle}>
				<View style={css.ingredients__imageBox}>
					<Image style={css.ingredients__image} source={{uri: ingredient.product.image}} />
				</View>
				<View style={css.ingredients__content}>
					<Text style={css.ingredients__title}>{ingredient.product.title}</Text>
					<Text style={css.ingredients__amount}>
						{this.getAmount(ingredient.amount, ingredient.measure, ingredient.product.baseMeasure)}
					</Text>
				</View>
				{this._renderCloseButton(ingredient.extra, ingredient.product._id)}
			</View>
		)
	}
}

IngredientList.propTypes = {
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired,
	setExtra: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}
