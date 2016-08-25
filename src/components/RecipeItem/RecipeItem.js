import React, { Component, PropTypes } from 'react'
import { Text, View, ListView, Image } from 'react-native'
import css from './RecipeItem.css'
import listCSS from '../List/List.css.js'

class RecipeItem extends Component {
	constructor (props) {
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			recipeItemActions: ds.cloneWithRows(this.props.stage.steps)
		}
	}
	render () {
		const { stage, numberOfStage } = this.props
		return (
			<View style={css.recipeItem}>
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
						dataSource={this.state.recipeItemActions}
						renderRow={this._renderActionItem}
					/>
				</View>
			</View>
		)
	}
	_renderImage () {
		let { image } = this.props
		if (!/http/.test()) image = 'http://' + image
		console.log(image)
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
	numberOfStage: PropTypes.number.isRequired
}

export default RecipeItem
