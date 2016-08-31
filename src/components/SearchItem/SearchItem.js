import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import css from './SearchItem.css'

class SearchItem extends Component {
	render () {
		const data = this.props.data
		return (
			<View style={css.searchItem}>
				<View style={css.searchItem__icon}></View>
				<Text style={css.searchItem__title}>
					{data.title}
				</Text>
			</View>
		)
	}
}

SearchItem.propTypes = {
	data: PropTypes.object.isRequired
}

export default SearchItem
