import React, { Component, PropTypes } from 'react'
import { View, Image } from 'react-native'
import BookmarkSaveIcon from './assets/bookmark_save.png'
import s from '../Icons.css'

export default class BookmarkSave extends Component {
	render () {
		return (
			<View style={s.bookmark__save}>
				<Image style={s.bookmark__save_icon} source={BookmarkSaveIcon} />
			</View>
		)
	}
}
