import Home from './Home'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'
import { setCurrentRecipe } from '../../actions/generalActions'
import { fetchJumbotron } from '../../actions/categoriesActions'

export default connect(
	state => ({
		jumbotron: state.categories.jumbotron
	}),
	dispatch => (bindActionCreators({
		navigatePush,
		setCurrentRecipe,
		fetchJumbotron
	}, dispatch))
)(Home)
