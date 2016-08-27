import {
	FETCH_RECIPES,
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION
} from '../constants/actionTypes'
import api from '../api/recipes'

const _fetchRecipes = recipes => ({
	type: FETCH_RECIPES,
	recipes
})

export const incrementRecipePortion = id => {
	return {
		type: INCREMENT_RECIPE_PORTION,
		id
	}
}

export const decrementRecipePortion = id => {
	return {
		type: DECREMENT_RECIPE_PORTION,
		id
	}
}

export const fetchRecipes = (id) => {
	return dispatch => {
		api.getRecipeById(id).then(recipes => {
			console.log(recipes)
			dispatch(_fetchRecipes(recipes))
		})
	}
}
