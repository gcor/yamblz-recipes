import Button from './Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'react-native-navigation-redux-helpers'

const stateToProps = state => ({
	navigation: state.navigation
})
const dispatchToProps = dispatch => (
	bindActionCreators(actions, dispatch)
)
export default connect(stateToProps, dispatchToProps)(Button)
