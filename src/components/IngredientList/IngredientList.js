import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import { pronunciation } from '../../utils'
import css from './IngredientList.css'

export default class IngredientList extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			list: this.ds.cloneWithRows(this.props.recipe.ingredients)
		}
	}
	componentWillReceiveProps (props) {
		this.setState({
			list: this.ds.cloneWithRows(this.props.recipe.ingredients)
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
			<View style={css.ingredients}>
				<View style={[css.ingredients__item, css.ingredients__portions]}>
					<View style={css.ingredients__left}>
						<Text style={[css.ingredients__title, css.bold]}> Порции </Text>
					</View>
					<View style={css.ingredients__right}>
						<Text style={css.ingredients__counter} onPress={this.props.onDecrement}> - </Text>
						<Text style={css.ingredients__counter}> {this.props.recipe.portion} </Text>
						<Text style={css.ingredients__counter} onPress={this.props.onIncrement}> + </Text>
					</View>
				</View>
				<ListView
					enableEmptySections
					contentContainerStyle={css.ingredients__list}
					dataSource={this.state.list}
					renderRow={this._renderIngredient.bind(this)}
				/>
			</View>
		)
	}
	_renderIngredient = ingredient => {
		const amountPerPortion = ingredient.amount / this.props.recipe.defaultPortion
		const amount = this.props.recipe.portion * amountPerPortion
		return (
			<View style={css.ingredients__item}>
				<View style={css.ingredients__left}>
					<Text style={css.ingredients__title}> {ingredient.product.title} </Text>
				</View>
				<View style={css.ingredients__right}>
					<Text style={css.ingredients__measure}>
						{this.getAmount(amount, ingredient.measure, ingredient.product.baseMeasure)}
					</Text>
				</View>
			</View>
		)
	}
}

IngredientList.propTypes = {
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}
