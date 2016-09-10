import RecipeView from './RecipeView'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import {
	fetchRecipes,
	incrementRecipePortion,
	decrementRecipePortion,
	setProductAsMain,
	setProductAsExtra,
	resetRecipe
} from '../../actions/recipesActions'
import { saveInLastViewed } from '../../actions/generalActions.js'
import { addToHistory, removeFromHistory } from '../../actions/historyActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentRecipe: state.general.currentRecipe,
	addToHistoryButtonText: state.recipe.isFavourite ? 'Добавить в избранное' : 'Удалить из избранного'
})

const dipsatchToProps = dispatch => (bindActionCreators({
	navigatePush,
	fetchRecipes,
	addToHistory,
	removeFromHistory,
	saveInLastViewed,
	incrementRecipePortion,
	decrementRecipePortion,
	setProductAsMain,
	setProductAsExtra,
	resetRecipe
}, dispatch))

export default connect(stateToProps, dipsatchToProps)(RecipeView)
