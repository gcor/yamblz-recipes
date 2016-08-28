import { FETCH_CATEGORIES, FETCH_CATEGORY_BY_ID } from '../constants/actionTypes'
const initialState = []

function categories (state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES: return [...state, ...action.payload]
		case FETCH_CATEGORY_BY_ID: return [...state, ...action.payload]
		default: return state
	}
}

export default categories
