import React, { Component, PropTypes } from 'react'
import {
	TouchableHighlight,
	Image
} from 'react-native'
import css from '../Icons.css'
import BookmarkIcon from '../../../icons/bookmark_w.png'
import BookmarkFav from '../../../icons/bookmark_fill_w.png'
import BookmarkIconBlack from '../../../icons/bookmark.png'
import BookmarkFavBlack from '../../../icons/bookmark_fill.png'

const underlayColor = 'rgba(255,255,255,0.2)'
export default class Bookmark extends Component {
	constructor (props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			isFavourite: props.isFavourite,
			isBlack: props.isBlack,
			source: this.getSource(props.isFavourite, props.isBlack)  		
		}
	}

	componentWillReceiveProps (props) {
  		this.setState({isFavourite: props.isFavourite})
		this.setState({isBlack: props.black})
		this.setState({source: this.getSource(props.isFavourite, props.isBlack)})
	}

	getSource (isFavourite, isBlack) {
		if (isFavourite && isBlack)
			return BookmarkFavBlack
		if (!isFavourite && isBlack)
			return BookmarkIconBlack
		if (isFavourite && !isBlack)
			return BookmarkFav
		if (!isFavourite && !isBlack)
			return BookmarkIcon
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

		this.setState({source: this.getSource(!isFavourite, this.state.isBlack)})
	}
	render () {
		return (
			<TouchableHighlight style={css.bar__hilight}
				onPress={this.handleClick}
				underlayColor={underlayColor}>
				<Image style={css.bar__icon} source={this.state.source} />
			</TouchableHighlight>
		)
	}
}

Bookmark.propTypes = {
	addToSavedRecipes: PropTypes.func.isRequired,
	removeFromSavedRecipes: PropTypes.func.isRequired,
	recipeID: PropTypes.string.isRequired,
	isBlack: PropTypes.bool.isRequired,
	isFavourite: PropTypes.bool.isRequired,
	navigationRole: PropTypes.bool,
	pushToHistory: PropTypes.func.isRequired
}
