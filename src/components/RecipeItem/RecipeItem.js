import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, Image } from 'react-native'
import css from './RecipeItem.css'
import listCSS from '../List/List.css.js'

class RecipeItem extends Component {
	_getHeight (e) {
		const { height } = e.nativeEvent.layout
		const { calculateSlideHeight, numberOfStage } = this.props
		calculateSlideHeight({
			index: numberOfStage,
			height: height
		})
	}
	render () {
		const { stage, numberOfStage } = this.props
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const list = {
			recipeItemActions: ds.cloneWithRows(this.props.stage.steps)
		}
		return (
			<View style={css.recipeItem} onLayout={(e) => this._getHeight(e)}>
				<View style={css.recipeItem__header}>
					<View style={css.recipeItem__step}>
						<Text style={css.recipeItem__stepValue}>{numberOfStage}</Text>
					</View>
					<Text style={css.recipeItem__title}>{stage.title}</Text>
				</View>
				{this._renderImage()}
				<View style={css.recipeItem__footer}>
					<ListView
						style={listCSS.list}
						dataSource={list.recipeItemActions}
						renderRow={this._renderActionItem}
					/>
				</View>
			</View>
		)
	}
	_renderImage () {
		let { image } = this.props
		// if (!/http/.test()) image = 'http://' + image
		// todo
		image = 'http://' + image
		if (image) {
			return (
				<View style={css.recipeItem__body}>
					<Image source={{uri: image}} style={css.recipeItem__img} />
				</View>
			)
		}
		return null
	}
	_renderActionItem (rowData) {
		return (
			<View style={listCSS.item}>
				<View style={listCSS.item__point}></View>
				<Text style={listCSS.item__value}>{rowData}</Text>
			</View>
		)
	}
}

RecipeItem.propTypes = {
	image: PropTypes.string,
	stage: PropTypes.object.isRequired,
	numberOfStage: PropTypes.number.isRequired,
	pushCardHeight: PropTypes.func.isRequired,
	calculateSlideHeight: PropTypes.func.isRequired
}

export default RecipeItem
