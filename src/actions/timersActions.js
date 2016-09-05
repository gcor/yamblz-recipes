import {
	SET_TIMER,
	REMOVE_TIMER,
	SORT_TIMERS
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const execTimers = timers => (dispatch, getState) => {
	timers.forEach(timer => {
		console.log(timer)
	})
}
export const setTimer = createAction(SET_TIMER)
export const removeTimer = createAction(REMOVE_TIMER)
export const sortTimers = createAction(SORT_TIMERS)
