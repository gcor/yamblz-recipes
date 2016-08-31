import {
	FETCH_CATEGORY_BY_ID,

	FETCH_CATEGORIES_LOADING,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_ERROR,

	LOADING,
	SUCCESS,
	ERROR
} from '../constants/actionTypes'
const initialState = {
	status: '',
	categories: []
}

function categories (state = initialState, action) {
	switch (action.type) {
		// @deprecated
		// case FETCH_CATEGORY_BY_ID: return [...state, ...action.payload]

		case FETCH_CATEGORIES_LOADING:
			return {
				...state,
				...{status: LOADING}}
		case FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				...{categories: action.payload},
				...{status: SUCCESS}
			}

		case FETCH_CATEGORIES_ERROR:
			return {
				...state,
				...{status: ERROR}
			}

		default: return state
	}
}

export default categories
