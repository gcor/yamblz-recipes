import { FETCH_RECIPES } from '../constants/actionTypes'
import api from '../api/recipes'

const _fetchRecipes = recipes => ({
	type: FETCH_RECIPES,
	recipes
})

export const fetchRecipes = (id) => {
	return dispatch => {
		api.getRecipeById(id).then(recipes => {
			console.log(recipes)
			dispatch(_fetchRecipes(recipes))
		})
	}
}
