import RecipeView from './RecipeView'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import {
	fetchRecipes,
	setProductAsMain,
	setProductAsExtra,
	resetRecipe
} from '../../actions/recipesActions'
import { saveInLastViewed } from '../../actions/generalActions.js'
import {
	addToSavedRecipes,
	removeFromSavedRecipes
} from '../../actions/historyActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentRecipe: state.general.currentRecipe,
	addToSavedRecipesButtonText: '',
	general: state.general
})

const dipsatchToProps = dispatch => (bindActionCreators({
	navigatePush,
	fetchRecipes,
	addToSavedRecipes,
	removeFromSavedRecipes,
	saveInLastViewed,
	setProductAsMain,
	setProductAsExtra,
	resetRecipe
}, dispatch))

export default connect(stateToProps, dipsatchToProps)(RecipeView)
