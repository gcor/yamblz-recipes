import Timers from './Timers'
import { connect } from 'react-redux'

export default connect(
	state => ({
		timers: state.timers
	})
)(Timers)
