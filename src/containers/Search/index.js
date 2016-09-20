import Search from './Search'
import { connect } from 'react-redux'
import { navigatePush, navigatePop } from '../../actions/navigationActions'
import { bindActionCreators } from 'redux'
import { resetSearch } from '../../actions/searchActions'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({navigatePush, navigatePop, resetSearch}, dispatch))
)(Search)
