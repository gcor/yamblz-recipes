import {
	FETCH_LAST_VIEWED_LOADING,
	FETCH_LAST_VIEWED_SUCCESS,
	FETCH_LAST_VIEWED_ERROR,
	LOADING,
	SUCCESS,
	ERROR
} from '../constants/actionTypes'

const initialState = {
	status: '',
	lastViewedRecipes: []
}

function lastViewed (state = initialState, action) {
	switch (action.type) {
		case FETCH_LAST_VIEWED_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
		case FETCH_LAST_VIEWED_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...{lastViewedRecipes: action.payload}
			}
		case FETCH_LAST_VIEWED_ERROR:
			return {
				...state,
				...{status: ERROR}
			}
		default:
			return state
	}
}

export default lastViewed
