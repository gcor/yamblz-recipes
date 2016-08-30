import React, { Component } from 'react'
import { View } from 'react-native'
import SearchList from '../../components/SearchList'
import ui from '../../constants/css'

export default class Search extends Component {
	render () {
		return (
			<View style={ui.page}>
				<SearchList />
			</View>
		)
	}
}
