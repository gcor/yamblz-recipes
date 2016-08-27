import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './IngredientList.css'

export default class IngredientList extends Component {
	constructor (props) {
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			rowCount: this.props.recipe.ingredients.length,
			dataSource: ds.cloneWithRows(this.props.recipe.ingredients)
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
						<Text style={css.ingredients__counter}> {this.props.recipe.portions} </Text>
						<Text style={css.ingredients__counter} onPress={this.props.onIncrement}> + </Text>
					</View>
				</View>
				<ListView
					contentContainerStyle={css.ingredients__list}
					dataSource={this.state.dataSource}
					renderRow={this._renderIngredient}
				/>
			</View>
		)
	}
	_renderIngredient = (ingredient) => {
		return (
			<View style={css.ingredients__item}>
				<View style={css.ingredients__left}>
					<Text style={css.ingredients__title}> {ingredient.title} </Text>
				</View>
				<View style={css.ingredients__right}>
					<Text style={css.ingredients__measure}> {ingredient.quantity} {ingredient.measure} </Text>
				</View>
			</View>
		)
	}
}
