import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, Image } from 'react-native'
import css from './RecipeItem.css'
import listCSS from '../List/List.css'
import Brain from '../Brain'
import { formatImageSrc } from '../../utils'
import Timer from '../Timer'

class RecipeItem extends Component {
	_getHeight (e) {
		const { height, y } = e.nativeEvent.layout
		const { calculateSlideHeight, numberOfStage } = this.props
		calculateSlideHeight({
			index: numberOfStage,
			height: height,
			offsetY: y
		})
	}

	render () {
		const { stage, numberOfStage } = this.props
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const list = {
			recipeItemActions: ds.cloneWithRows(stage.steps)
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
						renderRow={this._renderActionItem.bind(this)}
					/>
				</View>
				{this._renderTimer()}
			</View>
		)
	}

	shouldComponentUpdate () {
		return false
	}

	_renderTimer () {
		const { stage } = this.props
		const { timer } = stage
		if (!timer) return null
		const { actionLabel, timerLabel, timeout } = timer
		return (
			<Timer
				actionLabel={actionLabel}
				timerLabel={timerLabel}
				timeout={timeout}
			/>
		)
	}

	_renderImage () {
		let { image } = this.props
		if (image === '') return null
		image = formatImageSrc(image)
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
		const { title, visible } = rowData
		const cstring = Brain.search(title)
		const renderProducts = cstring
			? <Text style={listCSS.item__action}>{cstring}</Text>
			: null
		if (visible === false) return null
		return (
			<View style={listCSS.item}>
				<View style={listCSS.item__point}></View>
				<Text style={listCSS.item__value}>{title}</Text>
				{renderProducts}
			</View>
		)
	}
}

RecipeItem.propTypes = {
	image: PropTypes.string,
	stage: PropTypes.object.isRequired,
	numberOfStage: PropTypes.number.isRequired,
	calculateSlideHeight: PropTypes.func.isRequired,
	ingredients: PropTypes.array.isRequired,
	timer: PropTypes.object
}

export default RecipeItem
