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

const sortTimers = timers => {
	for (var i = 0; i < timers.lenth; i++) {
		for (var e = 0; e < timers.length; e++) {
			console.log(timers[e])
		}
	}
}
function timers (state = initialState, action) {
	switch (action.type) {
		case SET_TIMER:
			let timers = state.timers

			return [...state, action.payload]
		case REMOVE_TIMER: return state
		case SORT_TIMERS: return state
		default: return state
	}
}

export default timers
