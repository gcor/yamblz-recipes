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
import { addToHistory } from '../../actions/historyActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentRecipe: state.general.currentRecipe
})

const dipsatchToProps = dispatch => (bindActionCreators({
	navigatePush,
	fetchRecipes,
	addToHistory,
	saveInLastViewed,
	incrementRecipePortion,
	decrementRecipePortion,
	setProductAsMain,
	setProductAsExtra,
	resetRecipe
}, dispatch))

export default connect(stateToProps, dipsatchToProps)(RecipeView)
