import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './ToolsList.css'

class ToolsList extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		const unrequiredProducts = this.props.tools
		this.state = {
			list: this.ds.cloneWithRows(unrequiredProducts)
		}
	}
	componentWillReceiveProps (props) {
		const unrequiredProducts = this.props.tools
		this.setState({
			list: this.ds.cloneWithRows(unrequiredProducts)
		})
	}
	render () {
		return (
			<View>
				<Text style={css.toolslist__title}>{this.props.title.toUpperCase()}</Text>
				<ListView
					horizontal
					enableEmptySections
					contentContainerStyle={css.toolslist}
					showsHorizontalScrollIndicator={false}
					dataSource={this.state.list}
					renderRow={this._renderItem.bind(this)}
				/>
			</View>
		)
	}
	_renderItem (item) {
		return (
			<View style={css.toolslist__item}>
				<Text style={css.toolslist__text}> {item} </Text>
			</View>
		)
	}
}

ToolsList.propTypes = {
	title: PropTypes.string.isRequired,
	tools: PropTypes.array.isRequired
}

export default ToolsList
