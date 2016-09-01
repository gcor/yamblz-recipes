import History from './History'
import { connect } from 'react-redux'
import { navigatePush } from '../../actions/navigationActions'
import { setCurrentRecipe } from '../../actions/generalActions'
import { fetchHistory } from '../../actions/historyActions'
import { bindActionCreators } from 'redux'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({
		navigatePush, setCurrentRecipe,
		fetchHistory
	}, dispatch))
)(History)
