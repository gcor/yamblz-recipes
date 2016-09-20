import Plus from './Plus'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	incrementRecipePortion
} from '../../../actions/recipesActions'

export default connect(
	state => ({}),
	dispatch => bindActionCreators({
		incrementRecipePortion
	}, dispatch)
)(Plus)
