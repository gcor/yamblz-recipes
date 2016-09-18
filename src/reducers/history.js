import {
	FETCH_SAVED_RECIPES_LOADING,
	FETCH_SAVED_RECIPES_SUCCESS,
	FETCH_SAVED_RECIPES_ERROR,
	LOADING,
	SUCCESS,
	ERROR
} from '../constants/actionTypes'

const initialState = {
	status: '',
	historyRecipes: []
}

function history (state = initialState, action) {
	switch (action.type) {
		case FETCH_SAVED_RECIPES_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
		case FETCH_SAVED_RECIPES_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...{historyRecipes: action.payload}
			}
		case FETCH_SAVED_RECIPES_ERROR:
			return {...state, ...{status: ERROR}}
		default:
			return state
	}
}

export default history
