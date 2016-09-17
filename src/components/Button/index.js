import Button from './Button'
import { connect } from 'react-redux'

const stateToProps = state => ({
	navigationState: state.navigationState
})
const dispatchToProps = dispatch => ({})
export default connect(stateToProps, dispatchToProps)(Button)
