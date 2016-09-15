import {
	SET_TIMER,
	REMOVE_TIMER,
	SORT_TIMERS,
	RESET_TIMERS
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
		console.log(timers[i].actionLabel, actionLabel)
		if (timers[i].actionLabel === actionLabel &&
				timers[i].timeout === timeout) {
			return true
		}
	}
	return false
}

function timers (state = initialState, action) {
	switch (action.type) {
		case SET_TIMER:
			if (!action.payload) return state
			console.log(action.payload)
			let timers = state
			if (checkForDuplications(timers, action.payload)) return state
			timers.push(action.payload)
			timers = sortTimersByHands(timers)

			return [...timers]
		case REMOVE_TIMER: return state
		case SORT_TIMERS: return state
		case RESET_TIMERS: return []
		default: return state
	}
}

export default timers
