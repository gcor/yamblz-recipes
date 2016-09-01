import React, { Component, PropTypes } from 'react'
import { View, ActivityIndicator } from 'react-native'
import s from '../../constants/css'

export default class Preloader extends Component {
	render () {
		const { margin } = this.props
		let style = {}
		style.margin = margin
		return (
			<View style={style}>
				<ActivityIndicator
					animating
					color={s.yellow}
					size='large'
				/>
			</View>
		)
	}
}

Preloader.propTypes = {
	margin: PropTypes.number
}
