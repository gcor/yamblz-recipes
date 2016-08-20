import Counter from './Counter'
import { connect } from 'react-redux'
import { increment, decrement } from '../../reducers/counter'

const stateToProps = state => ({
	count: state.counter.count
})

const dispatchToProps = dispatch => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement())
})

export default connect(stateToProps, dispatchToProps)(Counter)
