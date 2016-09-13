import Bookmark from './Bookmark'
import { connect } from 'react-redux'
import { addToHistory, removeFromHistory } from '../../../actions/historyActions'
import { navigatePush } from '../../../actions/navigationActions'

export default connect(
	state => ({
		recipeID: state.recipe._id,
		isFavourite: state.recipe.isFavourite
	}),
	dispatch => ({
		addToHistory: id => dispatch(addToHistory(id)),
		removeFromHistory: id => dispatch(removeFromHistory(id)),
		pushToHistory: () => dispatch(navigatePush({
			key: 'History',
			title: 'Ваши рецепты'
		}))
	})
)(Bookmark)
