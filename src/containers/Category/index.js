import Category from './Category'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { fetchCategories } from '../../actions/categoriesActions'
import { setCurrentRecipe } from '../../actions/generalActions'
import { bindActionCreators } from 'redux'

console.log(fetchCategories)
export default connect(
	state => ({
		categories: state.categories
	}),
	dispatch => (bindActionCreators({
		navigatePush,
		fetchCategories,
		setCurrentRecipe
	}, dispatch))
)(Category)
