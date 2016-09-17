import Timer from './Timer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setTimer } from '../../actions/timersActions'
export default connect(
	state => ({}),
	dispatch => bindActionCreators({
		setTimer
	}, dispatch)
)(Timer)
