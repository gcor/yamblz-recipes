import Category from './Category'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({
		categories: state.categories
	}),
	dispatch => (bindActionCreators({navigatePush}, dispatch))
)(Category)
