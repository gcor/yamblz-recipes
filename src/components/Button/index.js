import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
import Navigation from './Navigation'

const { popRoute, pushRoute} = actions

const stateToProps = state => ({})
const dispatchToProps = dispatch => ({
	pushRoute: routeName => dispatch(pushRoute(routeName))
})
export default connect(stateToProps, dispatchToProps)(Navigation)
