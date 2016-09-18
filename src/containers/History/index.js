import History from './History'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { setCurrentRecipe } from '../../actions/generalActions'
import { fetchSavedRecipes, fetchLastViewed } from '../../actions/historyActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({
		lastViewedRecipes: state.lastViewed.lastViewedRecipes,
		historyRecipes: state.history.historyRecipes
	}),
	dispatch => (bindActionCreators({
		navigatePush,
		setCurrentRecipe,
		fetchSavedRecipes,
		fetchLastViewed
	}, dispatch))
)(History)
