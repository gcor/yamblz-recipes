import { FETCH_CATEGORIES } from '../constants/actionTypes'
const initialState = []

function categories (state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES: return [...state, ...action.payload]
		default: return state
	}
}

export default categories
