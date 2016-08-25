import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import Card from '../Card/Card'
import css from './Slider.css'

class Slider extends Component {
	constructor (props) {
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			dataSource: ds.cloneWithRows(this.props.cards)
		}
	}
	render () {
		return (
			<View style={css.slider}>
				<Text style={css.slider__title}>{this.props.title.toUpperCase()}</Text>
				<ListView
					horizontal
					dataSource={this.state.dataSource}
					renderRow={this._renderCard.bind(this)}
				/>
			</View>
		)
	}
	_renderCard (cardData) {
		return (
			<Card
				data={cardData}
				onPressHandler={this.props.onPressHandler}
				style={css.slider__item}
			/>
		)
	}
}

export default Slider
