import Search from './Search'
import { connect } from 'react-redux'
import { navigatePush, navigatePop } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({navigatePush, navigatePop}, dispatch))
)(Search)
