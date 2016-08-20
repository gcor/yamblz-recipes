import Recipe from './Recipe'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'

const stateToProps = state => ({
	recipe: state.recipe
})

const dipsatchToProps = dispatch => ({
	fetchRecipes: () => dispatch(fetchRecipes())
})
export default connect(stateToProps, dipsatchToProps)(Recipe)
