import RecipeView from './RecipeView'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import {
	fetchRecipes,
	incrementRecipePortion,
	decrementRecipePortion
} from '../../actions/recipesActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe
})

const dipsatchToProps = dispatch => (bindActionCreators({
	navigatePush,
	fetchRecipes,
	incrementRecipePortion,
	decrementRecipePortion
}, dispatch))

export default connect(stateToProps, dipsatchToProps)(RecipeView)
