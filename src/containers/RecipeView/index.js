import RecipeView from './RecipeView'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import {
	fetchRecipes,
	incrementRecipePortion,
	decrementRecipePortion
} from '../../actions/recipesActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({
		recipe: state.recipe
	}),
	dispatch => (bindActionCreators({
		navigatePush,
		fetchRecipes,
		incrementRecipePortion,
		decrementRecipePortion
	}, dispatch))
)(RecipeView)
