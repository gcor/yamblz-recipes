import Minus from './Minus'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	decrementRecipePortion
} from '../../../actions/recipesActions'

export default connect(
	state => ({}),
	dispatch => bindActionCreators({
		decrementRecipePortion
	}, dispatch)
)(Minus)
