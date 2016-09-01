import React, { Component, PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import css from './SuggestList.css'

class SuggestList extends Component {
	constructor (props) {
		super(props)
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
	}
	componentWillReceiveProps (props) {
		this.setState({
			list: this.ds.cloneWithRows(this.props.items)
		})
	}
	render () {
		return (
			<View style={css.suggestlist}>
				<ListView
					horizontal
					enableEmptySections
					showsHorizontalScrollIndicator={false}
					dataSource={this.state.list}
					renderRow={this.renderItem}
				/>
			</View>
		)
	}
	renderItem (item) {

		return (
			<View style={css.suggestlist__item}>
				<Text
					numberOfLines={1}
					style={css.suggestlist__text}>
						{item.title}
				</Text>
			</View>
		)
	}
}

SuggestList.propTypes = {
	items: PropTypes.object.isRequired
}

export default SuggestList
