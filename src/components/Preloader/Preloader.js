import React, { Component, PropTypes } from 'react'
import { View, ActivityIndicator } from 'react-native'
import s from '../../constants/css'

export default class Preloader extends Component {
	render () {
		const { margin } = this.props
		let style = {}
		style.marginTop = margin
		return (
			<View style={style}>
				<ActivityIndicator
					animating
					color={'#ffd11a'}
					size='large'
				/>
			</View>
		)
	}
}

Preloader.propTypes = {
	margin: PropTypes.number
}
