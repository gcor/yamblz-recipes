import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './StageList.css'

export default class StageList extends Component {
	constructor (props) {
		super(props)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			rowCount: this.props.recipe.stages.length,
			dataSource: ds.cloneWithRows(this.props.recipe.stages)
		}
	}
	render () {
		return (
			<View style={css.stages}>
				<ListView
					contentContainerStyle={css.stages__list}
					dataSource={this.state.dataSource}
					renderRow={this._renderStage}
				/>
			</View>
		)
	}
	_renderStage = (stage) => {
		return (
			<View style={css.stages__item}>
				<Text style={css.stages__title}> {stage.title} </Text>
			</View>
		)
	}
}
