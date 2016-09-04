import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './StageList.css'

export default class StageList extends Component {
	render () {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const list = {
			rowCount: this.props.recipe.stages.length,
			dataSource: ds.cloneWithRows(this.props.recipe.stages)
		}
		return (
			<View style={css.stages}>
				<ListView
					contentContainerStyle={css.stages__list}
					dataSource={list.dataSource}
					renderRow={this._renderStage}
				/>
			</View>
		)
	}
	_renderStage = (stage, sectionId, rowId) => {
		var stageNum = parseInt(rowId) + 1
		return (
			<View style={css.stages__item}>
				<Text style={css.stages__title}> {stageNum}. {stage.title} </Text>
			</View>
		)
	}
}

StageList.propTypes = {
	recipe: PropTypes.object.isRequired
}
