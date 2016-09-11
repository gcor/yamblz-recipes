import AbsoluteTimer from './AbsoluteTimer'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'

export default connect(
	state => ({
		timers: state.timers
	}),
	dispatch => ({
		goToTimers: () =>
			dispatch(navigatePush({key: 'Timers', title: 'Таймеры'}))
	})
)(AbsoluteTimer)
