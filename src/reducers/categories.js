import {
	FETCH_JUMBOTRON_LOADING,
	FETCH_JUMBOTRON_SUCCESS,
	FETCH_JUMBOTRON_ERROR,

	FETCH_RECOMMEND_LOADING,
	FETCH_RECOMMEND_SUCCESS,
	FETCH_RECOMMEND_ERROR,

	FETCH_CATEGORY_LOADING,
	FETCH_CATEGORY_SUCCESS,
	FETCH_CATEGORY_ERROR,

	LOADING,
	SUCCESS,
	ERROR
} from '../constants/actionTypes'
const initialState = {
	status: '',
	jumbotron: [],
	recommend: [],
	category: []
}

function categories (state = initialState, action) {
	switch (action.type) {

		case FETCH_CATEGORY_LOADING:
			return {
				...state,
				...{status: LOADING}}
		case FETCH_CATEGORY_SUCCESS:
			return {
				...state,
				...{category: action.payload},
				...{status: SUCCESS}
			}
		case FETCH_CATEGORY_ERROR:
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

		case FETCH_RECOMMEND_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
		case FETCH_RECOMMEND_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...{recommend: action.payload}
			}
		case FETCH_RECOMMEND_ERROR:
			return {
				...state,
				...{state: ERROR}
			}

		default: return state
	}
}

export default categories
