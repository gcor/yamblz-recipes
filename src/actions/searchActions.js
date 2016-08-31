import {
	SEARCH_GO
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const searchGo = createAction(SEARCH_GO, async (query) => {
	return query
})
