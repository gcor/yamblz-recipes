import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import css from './Header.css'

export default class Header extends Component {
	render () {
		const { title } = this.props
		return (
			<View style={css.header}>
				<View style={css.header__button}>
					<View style={css.header__icon}></View>
				</View>
				<Text style={css.header__title}>{title}</Text>
			</View>
		)
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}
