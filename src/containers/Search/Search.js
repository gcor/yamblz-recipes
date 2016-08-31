import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import SearchList from '../../components/SearchList'
import ui from '../../constants/css'

export default class Search extends Component {
	render () {
		return (
			<ScrollView style={ui.page}>
				<SearchList />
			</ScrollView>
		)
	}
}
