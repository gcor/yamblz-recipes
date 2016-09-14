import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './SearchItem.css'

class SearchItem extends Component {
	render () {
		const {data, onItemPress} = this.props
		return (
			<TouchableHighlight
				underlayColor={'rgba(255,255,255,0.2)'}
				onPress={onItemPress}>
				<View style={css.searchItem}>
					<Image style={css.searchItem__icon} source={data.icon} />
					<Text style={css.searchItem__title}>
						{data.title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

SearchItem.propTypes = {
	onItemPress: PropTypes.func,
	data: PropTypes.object.isRequired
}

export default SearchItem
