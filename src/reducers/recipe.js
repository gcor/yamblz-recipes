import { FETCH_RECIPES } from '../constants/actionTypes'

const initialState = {
	title: '',
	cookingTime: 0,
	image: ''
}

function recipe (state = initialState, action) {
	switch (action.type) {
	case FETCH_RECIPES: return {state, ...action.recipes}
	default: return state
	}
}
export default recipe
