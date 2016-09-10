import React, { Component, PropTypes, TouchableHighlight } from 'react'
import { Text, View, ListView, Image } from 'react-native'
import css from './RecipeItem.css'
import listCSS from '../List/List.css'
import { useBrain } from './util'
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
		const { stage } = this.props
		const { timer } = stage
		let { image } = this.props
		if (timer) return null
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
		// console.log(rowData)
		// console.log(this.props.ingredients)
    const { title } = rowData
		const cstring = useBrain(title, this.props.ingredients)
		const renderProducts = cstring ?
			<View style={listCSS.item__action}>
				<Text>{cstring}</Text>
			</View>
			: null
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
