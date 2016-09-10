import {
	FETCH_HISTORY_LOADING,
	FETCH_HISTORY_SUCCESS,
	FETCH_HISTORY_ERROR,
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
		case FETCH_HISTORY_LOADING:
			return {...state, ...{state: LOADING}}
		case FETCH_HISTORY_SUCCESS:
			return {
				// Мы отправляем каждый раз новое
				// ...state,
				// ...{state: SUCCESS},
				// ...{historyRecipes: [...state.historyRecipes, ...action.payload]}
				state: SUCCESS,
				historyRecipes: action.payload
			}
		case FETCH_HISTORY_ERROR:
			return {...state, ...{state: ERROR}}
		default:
			return state
	}
}

export default history
