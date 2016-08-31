import SearchList from './SearchList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchGo } from '../../actions/searchActions'

const stateToProps = state => ({
	navigationState: state.navigationState
})
const dispatchToProps = dispatch => (
	bindActionCreators({
		searchGo
	}, dispatch))
export default connect(stateToProps, dispatchToProps)(SearchList)
