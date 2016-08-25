import Recipe from './Recipe'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe
})

const dipsatchToProps = dispatch => (bindActionCreators({fetchRecipes}, dispatch))
export default connect(stateToProps, dipsatchToProps)(Recipe)
