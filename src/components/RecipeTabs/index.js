import RecipeTabs from './RecipeTabs'
import { connect } from 'react-redux'

export default connect(
	state => ({
		recipe: state.recipe
	})
)(RecipeTabs)
