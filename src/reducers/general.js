import {
	SET_CURRRENT_RECIPE,
	IS_FETCHED_CATEGORIES
} from '../constants/actionTypes'

const initialState = {
	currentRecipe: '', // Current recipe ID
	fetched: {
		categories: false
	}
}
function general (state = initialState, action) {
	switch (action.type) {
		case SET_CURRRENT_RECIPE:
			return {...state, ...{currentRecipe: action.payload}}
		case IS_FETCHED_CATEGORIES:
			return {...state,
				...{fetched: {...state.fetched, ...{categories: action.payload}}}}
		default: return state
	}
}

export default general
