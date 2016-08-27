import RecipeView from './RecipeView'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { fetchRecipes } from '../../actions/recipesActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({
		title: state.recipe.title
	}),
	dispatch => (bindActionCreators({navigatePush, fetchRecipes}, dispatch))
)(RecipeView)
