import React, { Component, PropTypes } from 'react'
import {
	TouchableHighlight,
	Image
} from 'react-native'
import css from '../Icons.css'
import BookmarkIcon from './assets/bookmark.png'
import BookmarkFav from './assets/bookmark-fav.png'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class Bookmark extends Component {
	constructor (props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			isFavourite: props.isFavourite
		}
	}
	componentWillReceiveProps (props) {
		this.setState({isFavourite: props.isFavourite})
		console.log(this.state.isFavourite)
	}
	handleClick () {
		const { navigationRole, addToHistory,
			pushToHistory, removeFromHistory, recipeID } = this.props
		if (navigationRole) return pushToHistory()
		const { isFavourite } = this.state
		if (isFavourite) {
			removeFromHistory(recipeID)
			this.setState({isFavourite: false})
		} else {
			addToHistory(recipeID)
			this.setState({isFavourite: true})
		}
	}
	render () {
		console.log(this.props, this.state.isFavourite)
		return (
			<TouchableHighlight style={css.bar__hilight}
				onPress={this.handleClick}
				underlayColor={underlayColor}>
				<Image style={css.bar__icon} source={
					this.state.isFavourite ? BookmarkFav : BookmarkIcon
					} />
			</TouchableHighlight>
		)
	}
}

Bookmark.propTypes = {
	addToHistory: PropTypes.func.isRequired,
	removeFromHistory: PropTypes.func.isRequired,
	recipeID: PropTypes.string.isRequired,
	isFavourite: PropTypes.bool.isRequired,
	navigationRole: PropTypes.bool,
	pushToHistory: PropTypes.func.isRequired
}
