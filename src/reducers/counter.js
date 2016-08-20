const initialState = {
	count: 0
}

import { INCREMENT, DECREMENT } from '../constants/actionTypes'

const counter = (state = initialState, action) => {
	switch (action.type) {
	case INCREMENT: return {state, ...{count: state.count + 10}}
	case DECREMENT: return {state, ...{count: state.count - 10}}
	default: return state
	}
}

export default counter
