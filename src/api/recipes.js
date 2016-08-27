import * as api from '../constants/api'

const fetchData = url => {
	return fetch(url).then(r => r.json())
}

export default {
	getRecipe (ids) {
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
