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
	recipes: []
}
function history (state = initialState, action) {
	switch (action.type) {
		case FETCH_HISTORY_LOADING:
			return {...state, ...{state: LOADING}}
		case FETCH_HISTORY_SUCCESS:
			return {...state, ...{state: SUCCESS}}
		case FETCH_HISTORY_ERROR:
			return {...state, ...{state: ERROR}}
		default:
			return state
	}
}

export default history
