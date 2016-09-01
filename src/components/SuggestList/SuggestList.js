import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import css from './SuggestList.css'

class SuggestList extends Component {
	render () {
		const data = this.props.data
		return (
			<View style={css.suggestlist}>
				<Text style={css.suggestlist__item}>фыв</Text>
				<Text style={css.suggestlist__item}>фыв</Text>
				<Text style={css.suggestlist__item}>фыв</Text>
			</View>
		)
	}
}

SuggestList.propTypes = {
	data: PropTypes.object.isRequired
}

export default SuggestList
