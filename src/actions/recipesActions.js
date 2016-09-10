import {
	FETCH_RECIPE,
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION,
	SET_PRODUCT_AS_MAIN,
	SET_PRODUCT_AS_EXTRA,
	RESET_RECIPE
} from '../constants/actionTypes'
import { getRecipeById } from '../api/recipes'
import { createAction } from 'redux-actions'

export const fetchRecipes = createAction(FETCH_RECIPE, async (id) => {
	const recipe = await getRecipeById(id)
	if (!recipe) return Promise.reject()
	return recipe
})

export function setProductAsMain (id) {
	return {
		type: SET_PRODUCT_AS_MAIN,
		id
	}
}
export function setProductAsExtra (id) {
	return {
		type: SET_PRODUCT_AS_EXTRA,
		id
	}
}

export const incrementRecipePortion = createAction(INCREMENT_RECIPE_PORTION)
export const decrementRecipePortion = createAction(DECREMENT_RECIPE_PORTION)
export const resetRecipe = createAction(RESET_RECIPE)
