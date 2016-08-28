import { SET_CURRRENT_RECIPE } from '../constants/actionTypes'

const initialState = {
	currentRecipe: '' // Current recipe ID
}
function general (state = initialState, action) {
	switch (action.type) {
		case SET_CURRRENT_RECIPE:
			return {...state, ...{currentRecipe: action.payload}}
		default: return state
	}
}

export default general
