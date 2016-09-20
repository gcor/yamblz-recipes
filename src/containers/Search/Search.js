import React, { Component, PropTypes } from 'react'
import { ScrollView } from 'react-native'
import SearchList from '../../components/SearchList'
import ui from '../../constants/css'

export default class Search extends Component {
	componentWillUnmount () {
		this.props.resetSearch()
	}
	render () {
		return (
			<ScrollView style={ui.simplePage}>
				<SearchList />
			</ScrollView>
		)
	}
}

Search.propTypes = {
	resetSearch: PropTypes.func.isRequired
}
