import {
	IS_FETCHED_CATEGORIES,
	SET_CURRRENT_RECIPE,
	SET_CURRENT_CATEGORY
} from '../constants/actionTypes'

const initialState = {
	currentRecipe: '', // Current recipe ID
	currentCategory: '', // Current category ID
	fetched: {
		categories: false
	}
}
function general (state = initialState, action) {
	switch (action.type) {
		case SET_CURRRENT_RECIPE:
			return {...state, ...{currentRecipe: action.payload}}
		case SET_CURRENT_CATEGORY:
			return {...state, ...{currentCategory: action.payload}}
		case IS_FETCHED_CATEGORIES:
			return {...state,
				...{fetched: {...state.fetched, ...{categories: action.payload}}}}
		default: return state
	}
}

export default general
