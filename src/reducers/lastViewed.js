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
			return {...state, ...{state: LOADING}}
		case FETCH_LAST_VIEWED_SUCCESS:
			return {
				// Мы отправляем каждый раз новое
				// ...state,
				// ...{state: SUCCESS},
				// ...{lastViewedRecipes: [...state.lastViewedRecipes, ...action.payload]}
				state: SUCCESS,
				lastViewedRecipes: action.payload
			}
		case FETCH_LAST_VIEWED_ERROR:
			return {...state, ...{state: ERROR}}
		default:
			return state
	}
}

export default lastViewed
