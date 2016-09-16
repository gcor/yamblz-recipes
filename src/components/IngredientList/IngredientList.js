import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, Image, TouchableHighlight } from 'react-native'
import css from './IngredientList.css'
import { getAmount } from './util'
import CloseButton from '../../icons/close_w.png'
import PlusButton from '../../icons/plus.png'
import MinusButton from '../../icons/minus.png'

export default class IngredientList extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const requiredProducts = this.props.recipe.ingredients.filter(item => item.isMain === true)
		this.state = {
			list: this.ds.cloneWithRows(requiredProducts)
		}
	}
	componentWillReceiveProps (props) {
		const requiredProducts = this.props.recipe.ingredients.filter(item => item.isMain === true)
		this.setState({
			list: this.ds.cloneWithRows(requiredProducts)
		})
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
							<TouchableHighlight
								underlayColor='transparent'
								style={css.controls__button}
								onPress={this.props.onDecrement}>
								<Image source={MinusButton} />
							</TouchableHighlight>
							<Text style={[css.controls__value, css.portions__text]}>
								{this.props.recipe.portion}
							</Text>
							<TouchableHighlight
								underlayColor='transparent'
								style={[css.controls__button, css.controls__button_plus]}
								onPress={this.props.onIncrement}>
								<Image source={PlusButton} />
							</TouchableHighlight>
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
	_renderCloseButton (isVisible, id) {
		if (isVisible) {
			return (
				<TouchableHighlight style={css.closeButton} onPress={this.props.setExtra.bind(this, id)}>
					<Image source={CloseButton} />
				</TouchableHighlight>
			)
		} else return false
	}
	_renderIngredient = ingredient => {
		const ingredientStyle = (ingredient.extra === false) ? css.ingredients__item : css.extraIngredients__item
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
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired,
	setExtra: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
}
