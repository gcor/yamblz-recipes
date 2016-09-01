import {
	FETCH_HISTORY
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'
import { getHistory } from '../api/history'

export const fetchHistory = createAction(FETCH_HISTORY, async () => {
	const recipes = await getHistory()
	return recipes
})
