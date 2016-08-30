import SearchList from './SearchList'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	navigationState: state.navigationState
})
const dispatchToProps = dispatch => ({})
export default connect(stateToProps, dispatchToProps)(SearchList)
