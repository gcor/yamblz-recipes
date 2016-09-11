import AbsoluteTimer from './AbsoluteTimer'
import { connect } from 'react-redux'

export default connect(
	state => ({
		timers: state.timers
	}),
	dispatch => ({})
)(AbsoluteTimer)
