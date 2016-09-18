import SoonInApp from './SoonInApp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSoonInAppStatus } from '../../actions/generalActions'

export default connect(
	state => ({
		isSubscribeOnRecipes: state.general.isSubscribeOnRecipes
	}),
	dispatch => (bindActionCreators({getSoonInAppStatus}, dispatch))
)(SoonInApp)
