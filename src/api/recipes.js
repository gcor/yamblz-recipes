import * as api from '../constants/api'
import { fetchData } from './common'

export function getRecipes (ids) {
	return new Promise((resolve, reject) => {
		fetchData(api.recipes)
			.then(recipe => resolve(recipe))
			.catch(err => reject(err))
	})
}

export function getRecipeById (id) {
	return new Promise((resolve, reject) => {
		fetchData(api.recipes + id)
			.then(recipe => resolve(recipe))
			.catch(err => reject(err))
	})
}
export default { getRecipes, getRecipeById }
