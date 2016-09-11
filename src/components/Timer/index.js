import Timer from './Timer'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import {
	setTimer,
	removeTimer,
	sortTimers
} from '../../actions/timersActions'
export default connect(
	state => ({

	}),
	dispatch => ({})
)(Timer)
