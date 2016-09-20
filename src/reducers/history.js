import {
	FETCH_SAVED_RECIPES_LOADING,
	FETCH_SAVED_RECIPES_SUCCESS,
	FETCH_SAVED_RECIPES_ERROR,
	LOADING,
	SUCCESS,
	ERROR,
	ADD_TO_SAVED_RECIPES_SUCCESS,
	REMOVE_FROM_SAVED_RECIPES_SUCCESS
} from '../constants/actionTypes'

const initialState = {
	status: '',
	historyRecipes: []
}

function history (state = initialState, action) {
	switch (action.type) {
		case FETCH_SAVED_RECIPES_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
		case FETCH_SAVED_RECIPES_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...{historyRecipes: action.payload}
			}
		case FETCH_SAVED_RECIPES_ERROR:
			return {...state, ...{status: ERROR}}
		case ADD_TO_SAVED_RECIPES_SUCCESS:
			let historyRecipes = state.historyRecipes
			const recipeToAdd = action.payload.recipe

			historyRecipes.unshift(recipeToAdd)
			return {
				...state,
				// ...{historyRecipes: historyRecipes} - вот так не работает О_о
				...{historyRecipes: historyRecipes.filter(item => item._id)}
			}
		case REMOVE_FROM_SAVED_RECIPES_SUCCESS:
			historyRecipes = state.historyRecipes
			const removedRecipeId = action.payload.removedRecipeId

			return {
				...state,
				...{historyRecipes: historyRecipes.filter(item => item._id !== removedRecipeId)}
			}
		default:
			return state
	}
}

export default history
