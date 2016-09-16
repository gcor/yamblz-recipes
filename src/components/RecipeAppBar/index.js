import RecipeAppBar from './RecipeAppBar'
import { connect } from 'react-redux'
import { navigatePush, navigatePop } from '../../actions/navigationActions'

export default connect(
	state => ({
		recipe: state.recipe
	}),
	dispatch => ({
		navigateBack: () => dispatch(navigatePop())
	})
)(RecipeAppBar)
