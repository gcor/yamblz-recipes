import Recipe from './Recipe'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushCardsHeights } from '../../actions/recipeSwiperActions'

export default connect(
	state => ({}),
	dispatch => (bindActionCreators({
		pushCardsHeights
	}, dispatch))
)(Recipe)
