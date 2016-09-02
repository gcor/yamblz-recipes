import Home from './Home'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'
import { setCurrentRecipe } from '../../actions/generalActions'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({
		navigatePush,
		setCurrentRecipe
	}, dispatch))
)(Home)
