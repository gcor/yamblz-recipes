import React, { Component, PropTypes } from 'react'
import {
	TouchableWithoutFeedback,
	Animated
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
			scale: new Animated.Value(1)
		}
	}

	componentWillReceiveProps (props) {
		this.setState({isFavourite: props.isFavourite})
	}

	handleAnimation () {
		Animated.sequence([
			Animated.timing(this.state.scale, {
				toValue: 1.6,
				duration: 300
			}),
			Animated.timing(this.state.scale, {
				toValue: 1,
				duration: 100
			})
		]).start()
	}

	handleClick () {
		const { navigationRole, addToSavedRecipes,
			pushToHistory, removeFromSavedRecipes, recipeID } = this.props
		this.handleAnimation()
		if (navigationRole) return pushToHistory()
		const { isFavourite } = this.state
		if (isFavourite) {
			removeFromSavedRecipes(recipeID)
			this.setState({isFavourite: false})
		} else {
			addToSavedRecipes(recipeID)
			this.setState({isFavourite: true})
			this.props.showBookmarkModal(true)
			setTimeout(() => {
				this.props.showBookmarkModal(false)
			}, 1000)
		}
	}
	render () {
		return (
			<TouchableWithoutFeedback style={css.bar__hilight}
				onPress={this.handleClick}
				underlayColor={underlayColor}>
				<Animated.Image
					style={[css.bar__icon, {transform: [{scale: this.state.scale}]}]}
					source={this.state.isFavourite ? BookmarkFav : BookmarkIcon}
				/>
			</TouchableWithoutFeedback>
		)
	}
}

Bookmark.propTypes = {
	addToSavedRecipes: PropTypes.func.isRequired,
	removeFromSavedRecipes: PropTypes.func.isRequired,
	recipeID: PropTypes.string.isRequired,
	isFavourite: PropTypes.bool.isRequired,
	navigationRole: PropTypes.bool,
	pushToHistory: PropTypes.func.isRequired,
	showBookmarkModal: PropTypes.func.isRequired
}
