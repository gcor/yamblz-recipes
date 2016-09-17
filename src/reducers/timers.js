import {
	SET_TIMER,
	REMOVE_TIMER,
	SORT_TIMERS,
	RESET_TIMERS,
	PAUSE_TIMER
} from '../constants/actionTypes'

const initialState = []

const sortTimersByHands = timers => {
	for (var i = 0; i < timers.length; i++) {
		for (var e = 0; e < timers.length; e++) {
			if (timers[i].timeout < timers[e].timeout) {
				var tmp = timers[i]
				timers[i] = timers[e]
				timers[e] = tmp
			}
		}
	}
	return timers
}

const checkForDuplications = (timers, newTimer) => {
	if (!timers || !newTimer) return true
	const { actionLabel, timeout } = newTimer
	for (var i = 0; i < timers.length; i++) {
		if (timers[i].actionLabel === actionLabel &&
				timers[i].timeout === timeout) {
			return true
		}
	}
	return false
}

function timers (state = initialState, action) {
	switch (action.type) {
// SET_TIMER
		case SET_TIMER:
			if (!action.payload) return state
			let timers = state
			if (checkForDuplications(timers, action.payload)) return state
			timers.push(action.payload)
			timers = sortTimersByHands(timers)

			return [...timers]
// REMOVE_TIMER
		case REMOVE_TIMER:
			timers = state
			timers.splice(action.payload, 1)
			return [...timers]
// SORT_TIMERS
		case SORT_TIMERS: return state
// PAUSE_TIMER
		case PAUSE_TIMER:
			if (!action.payload) return state
			timers = state.timers
			if (timers[action.payload]) {
				timers[action.payload].paused = !timers[action.payload].paused
			}
			return [...timers]
// RESET_TIMERS
		case RESET_TIMERS: return []
		default: return state
	}
}

export default timers
