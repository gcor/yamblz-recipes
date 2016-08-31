import {
	LOADING,
	SUCCESS,
	ERROR,
	SEARCH_GO_LOADING,
	SEARCH_GO_SUCCESS,
	SEARCH_GO_ERROR
} from '../constants/actionTypes'

const initialState = {
	status: LOADING,
	results: {

	}
}
function search (state = initialState, action) {
	switch (action.type) {
		case SEARCH_GO_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
		case SEARCH_GO_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...{results: action.payload}
			}
		case SEARCH_GO_ERROR:
			return {
				...state,
				...{status: ERROR}
			}
	}
}

export default search
