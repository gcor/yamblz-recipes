import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, Image, TouchableHighlight } from 'react-native'
import css from './IngredientList.css'
import { getAmount } from './util'
import CloseButton from '../../icons/gray_close.png'

import PlusButton from '../Icons/Plus'
import MinusButton from '../Icons/Minus'

export default class IngredientList extends Component {
	constructor (props) {
		super(props)
		const { recipe } = this.props
		const requiredProducts = recipe.ingredients.filter(item => item.isMain === true)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			list: this.ds.cloneWithRows(requiredProducts)
		}
	}
	componentWillReceiveProps (props) {
		const { recipe } = this.props
		const requiredProducts = recipe.ingredients.filter(item => item.isMain === true)
		this.setState({
			list: this.ds.cloneWithRows(requiredProducts)
		})
	}
	render () {
		return (
			<View>
				<View style={css.ingredients}>
					<View style={css.portions}>
						<Text style={css.portions__text}>Порции</Text>
						<View style={css.portions__controls}>
							<MinusButton />
							<Text style={[css.controls__value, css.portions__text]}>
								{this.props.recipe.portion}
							</Text>
							<PlusButton />
						</View>
					</View>
					<ListView
						enableEmptySections
						dataSource={this.state.list}
						renderRow={this._renderIngredient.bind(this)}
					/>
				</View>
			</View>
		)
	}
	/**
	 * Рендеринг кнопки "удалить" для добавленных игридиентов
	 */
	_renderCloseButton (isVisible, id) {
		if (isVisible) {
			return (
				<TouchableHighlight
					underlayColor='transparent'
					style={css.closeButton}
					onPress={this.props.setExtra.bind(this, id)}
					>
					<Image source={CloseButton} />
				</TouchableHighlight>
			)
		}
		return null
	}
	_renderIngredient = ingredient => {
		return (
			<View style={css.ingredients__item}>
				<View style={css.ingredients__imageBox}>
					<Image style={css.ingredients__image} source={{uri: ingredient.product.image}} />
				</View>
				<View style={css.ingredients__content}>
					<Text style={css.ingredients__title}>{ingredient.product.title}</Text>
					<Text style={css.ingredients__amount}>
						{getAmount(ingredient.amount, ingredient.measure, ingredient.product.baseMeasure)}
					</Text>
				</View>
				{this._renderCloseButton(ingredient.extra, ingredient.product._id)}
			</View>
		)
	}
}

IngredientList.propTypes = {
	// уменьшить количество порций
	onDecrement: PropTypes.func.isRequired,
	// увеличить количество порций
	onIncrement: PropTypes.func.isRequired,
	// перенос ингредиента в "можно добавить"
	setExtra: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}
