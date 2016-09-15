import {
	SET_TIMER,
	REMOVE_TIMER,
	SORT_TIMERS,
	RESET_TIMERS
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setTimer = createAction(SET_TIMER)
export const removeTimer = createAction(REMOVE_TIMER)
export const sortTimers = createAction(SORT_TIMERS)
export const resetTimers = createAction(RESET_TIMERS)
