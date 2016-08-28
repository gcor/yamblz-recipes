import * as api from '../constants/api'
import { fetchData } from './common'

export default {
	getRecipes (ids) {
		return new Promise((resolve, reject) => {
			fetchData(api.recipes)
				.then(recipe => resolve(recipe))
				.catch(err => reject(err))
		})
	},
	getRecipeById (id) {
		return new Promise((resolve, reject) => {
			fetchData(api.recipes + id)
				.then(recipe => resolve(recipe))
				.catch(err => reject(err))
		})
	}
}
