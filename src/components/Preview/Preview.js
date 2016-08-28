import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import css from './Preview.css'

class Preview extends Component {
	render () {
		const { title, days, dishes } = this.props.preview
		return (
			<View style={css.preview}>
				<Text style={css.preview__header}>{title.toUpperCase()}</Text>
				<Text style={css.preview__text}>{days} дней | {dishes} блюд</Text>
			</View>
		)
	}
}

Preview.propTypes = {
	preview: PropTypes.shape({
		title: PropTypes.string.isRequired,
		days: PropTypes.number.isRequired,
		dishes: PropTypes.number.isRequired
	})
}

export default Preview
