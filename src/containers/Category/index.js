import Category from './Category'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({navigatePush}, dispatch))
)(Category)
