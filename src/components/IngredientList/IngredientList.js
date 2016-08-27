import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './IngredientList.css'

export default class IngredientList extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const list = {
			rowCount: this.props.recipe.ingredients.length,
			dataSource: ds.cloneWithRows(this.props.recipe.ingredients)
		}
		return (
			<View style={css.ingredients}>
				<View style={[css.ingredients__item, css.ingredients__portions]}>
					<View style={css.ingredients__left}>
						<Text style={[css.ingredients__title, css.bold]}> Порции </Text>
					</View>
					<View style={css.ingredients__right}>
						<Text style={css.ingredients__counter} onPress={this.props.onDecrement}> - </Text>
						<Text style={css.ingredients__counter}> {this.props.recipe.portions} </Text>
						<Text style={css.ingredients__counter} onPress={this.props.onIncrement}> + </Text>
					</View>
				</View>
				<ListView
					enableEmptySections
					contentContainerStyle={css.ingredients__list}
					dataSource={list.dataSource}
					renderRow={this._renderIngredient.bind(this)}
				/>
			</View>
		)
	}
	_renderIngredient = ingredient => {
		const amount = this.props.recipe.portions * ingredient.amount
		return (
			<View style={css.ingredients__item}>
				<View style={css.ingredients__left}>
					<Text style={css.ingredients__title}> {ingredient.product.title} </Text>
				</View>
				<View style={css.ingredients__right}>
					<Text style={css.ingredients__measure}> {amount} {ingredient.product.defaultMeasure} </Text>
				</View>
			</View>
		)
	}
}

IngredientList.propTypes = {
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired
}
