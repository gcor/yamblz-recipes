import {
	SET_TIMER,
	REMOVE_TIMER,
	SORT_TIMERS
} from '../constants/actionTypes'

const initialState = [
	{
		actionLabel: 'Чё-то там делается',
		timeout: 500000
	}
]
function timers (state = initialState, action) {
	switch (action.type) {
		case SET_TIMER:
			return [...state, action.payload]
		case REMOVE_TIMER: return state
		case SORT_TIMERS: return state
		default: return state
	}
}

export default timers
