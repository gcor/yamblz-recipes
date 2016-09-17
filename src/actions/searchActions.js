import {
	SEARCH_GO
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'
import { searchFor } from '../api/search'

export const searchGo = createAction(SEARCH_GO, async (query) => {
	const response = await searchFor(query)
	return response
})
