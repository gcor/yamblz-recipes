import React, { Component, PropTypes } from 'react'
import {
	TouchableHighlight,
	Image
} from 'react-native'
import css from '../Icons.css'
import BookmarkIcon from '../../../icons/bookmark_w.png'
import BookmarkFav from '../../../icons/bookmark_fill_w.png'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class Bookmark extends Component {
	constructor (props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			isFavourite: props.isFavourite,
		}
	}

	componentWillReceiveProps (props) {
  		this.setState({isFavourite: props.isFavourite})
	}

	handleClick () {
		const { navigationRole, addToSavedRecipes,
			pushToHistory, removeFromSavedRecipes, recipeID } = this.props
		if (navigationRole) return pushToHistory()
		const { isFavourite } = this.state
		if (isFavourite) {
			removeFromSavedRecipes(recipeID)
			this.setState({isFavourite: false})
		} else {
			addToSavedRecipes(recipeID)
			this.setState({isFavourite: true})
		}
	}
	render () {
		return (
			<TouchableHighlight style={css.bar__hilight}
				onPress={this.handleClick}
				underlayColor={underlayColor}>
				<Image style={css.bar__icon} 
					source={this.state.isFavourite ? BookmarkFav : BookmarkIcon} />
			</TouchableHighlight>
		)
	}
}

Bookmark.propTypes = {
	addToSavedRecipes: PropTypes.func.isRequired,
	removeFromSavedRecipes: PropTypes.func.isRequired,
	recipeID: PropTypes.string.isRequired,
	isFavourite: PropTypes.bool.isRequired,
	navigationRole: PropTypes.bool,
	pushToHistory: PropTypes.func.isRequired
}
