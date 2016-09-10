import Home from './Home'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'
import { setCurrentRecipe } from '../../actions/generalActions'
import { fetchJumbotron, fetchRecommend } from '../../actions/categoriesActions'

export default connect(
	state => ({
		jumbotron: state.categories.jumbotron,
		recommend: state.categories.recommend
	}),
	dispatch => (bindActionCreators({
		navigatePush,
		setCurrentRecipe,
		fetchJumbotron,
		fetchRecommend
	}, dispatch))
)(Home)
