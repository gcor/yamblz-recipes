import {
	FETCH_RECIPE,
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION,
	RESET_RECIPE
} from '../constants/actionTypes'
import { getRecipeById } from '../api/recipes'
import { createAction } from 'redux-actions'

export const fetchRecipes = createAction(FETCH_RECIPE, async (id) => {
	const recipe = await getRecipeById(id)
	if (!recipe) return Promise.reject()
	return recipe
})

export const incrementRecipePortion = createAction(INCREMENT_RECIPE_PORTION)
export const decrementRecipePortion = createAction(DECREMENT_RECIPE_PORTION)
export const resetRecipe = createAction(RESET_RECIPE)
