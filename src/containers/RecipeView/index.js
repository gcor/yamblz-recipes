import RecipeView from './RecipeView'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import {
	fetchRecipes,
	incrementRecipePortion,
	decrementRecipePortion,
	resetRecipe
} from '../../actions/recipesActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentRecipe: state.general.currentRecipe
})

const dipsatchToProps = dispatch => (bindActionCreators({
	navigatePush,
	fetchRecipes,
	incrementRecipePortion,
	decrementRecipePortion,
	resetRecipe
}, dispatch))

export default connect(stateToProps, dipsatchToProps)(RecipeView)
