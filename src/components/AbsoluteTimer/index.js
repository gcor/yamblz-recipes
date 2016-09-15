import AbsoluteTimer from './AbsoluteTimer'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { removeTimer, pauseTimer } from '../../actions/timersActions'

export default connect(
	state => ({
		timers: state.timers
	}),
	dispatch => ({
		goToTimers: () =>
			dispatch(navigatePush({key: 'Timers', title: 'Таймеры'})),
		removeTimer: id =>
			dispatch(removeTimer(id)),
		pauseTimer: id =>
			dispatch(pauseTimer(id))
	})
)(AbsoluteTimer)
