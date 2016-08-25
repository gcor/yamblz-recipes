import Button from './Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'react-native-navigation-redux-helpers'

const stateToProps = state => ({
	navigationState: state.navigationState
})
const dispatchToProps = dispatch => (
	bindActionCreators(actions, dispatch)
)
export default connect(stateToProps, dispatchToProps)(Button)
