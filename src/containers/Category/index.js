import Category from './Category'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { fetchCategory } from '../../actions/categoriesActions'
import { setCurrentRecipe } from '../../actions/generalActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({
		categories: state.categories,
		category: state.categories.category,
		currentCategory: state.general.currentCategory,
		status: state.categories.status
	}),
	dispatch => (bindActionCreators({
		navigatePush,
		fetchCategory,
		setCurrentRecipe
	}, dispatch))
)(Category)
