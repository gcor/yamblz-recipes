import {
	FETCH_JUMBOTRON_LOADING,
	FETCH_JUMBOTRON_SUCCESS,
	FETCH_JUMBOTRON_ERROR,

	FETCH_CATEGORIES_LOADING,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_ERROR,

	LOADING,
	SUCCESS,
	ERROR
} from '../constants/actionTypes'
const initialState = {
	status: '',
	categories: [],
	jumbotron: []
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

		case FETCH_JUMBOTRON_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
		case FETCH_JUMBOTRON_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...{jumbotron: action.payload}
			}
		case FETCH_JUMBOTRON_ERROR:
			return {
				...state,
				...{state: ERROR}
			}

		default: return state
	}
}

export default categories
