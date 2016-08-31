import History from './History'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({navigatePush}, dispatch))
)(History)
