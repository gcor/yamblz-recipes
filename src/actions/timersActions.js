import {
	SET_TIMER,
	REMOVE_TIMER,
	SORT_TIMERS
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setTimer = createAction(SET_TIMER)
export const removeTimer = createAction(REMOVE_TIMER)
export const sortTimers = createAction(SORT_TIMERS)

export const execTimers = timers => (dispatch, getState) => {
	console.log(getState())
	dispatch(setTimer())
	// timers.forEach(timer => {
	// 	console.log(timer)
	// })
}
