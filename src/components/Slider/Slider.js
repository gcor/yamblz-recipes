import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, ViewPagerAndroid } from 'react-native'
import Card from '../Card/Card'
import css from './Slider.css'
import { debounce } from 'lodash'

export default class Slider extends Component {
	render () {
		return (
			<View style={css.slider}>
				<Text style={css.slider__title}>{this.props.title.toUpperCase()}</Text>
				<ViewPagerAndroid
					style={{height: 370, width: 400}}>
					{this._renderCards()}
				</ViewPagerAndroid>
			</View>
		)
	}

	_renderCards () {
		const { recipes } = this.props
		if (recipes.length === 0) return null
		return recipes.map(el => this._renderCard(el))
	}
	_renderCard (cardData) {
		return (
			<View key={cardData._id} style={{paddingLeft: 10}}>
				<Card
					data={cardData}
					onPressHandler={this.props.onPressHandler}
					style={css.slider__item}
				/>
			</View>
		)
	}
}



Slider.propTypes = {
	onPressHandler: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	recipes: PropTypes.array.isRequired
}
