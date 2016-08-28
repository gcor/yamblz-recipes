import {
	FETCH_RECIPES,
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION
} from '../constants/actionTypes'
import api from '../api/recipes'
import { createAction } from 'redux-actions'

const _fetchRecipes = createAction(FETCH_RECIPES)

export const incrementRecipePortion = createAction(INCREMENT_RECIPE_PORTION)
export const decrementRecipePortion = createAction(DECREMENT_RECIPE_PORTION)

export const fetchRecipes = (id) => {
	return dispatch => {
		api.getRecipeById(id).then(recipes => {
			console.log(recipes)
			dispatch(_fetchRecipes(recipes))
		})
	}
}
