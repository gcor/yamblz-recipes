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
			return {...state, ...{state: LOADING}}
		case FETCH_SAVED_RECIPES_SUCCESS:
			return {
				// Мы отправляем каждый раз новое
				// ...state,
				// ...{state: SUCCESS},
				// ...{historyRecipes: [...state.historyRecipes, ...action.payload]}
				state: SUCCESS,
				historyRecipes: action.payload
			}
		case FETCH_SAVED_RECIPES_ERROR:
			return {...state, ...{state: ERROR}}
		default:
			return state
	}
}

export default history
