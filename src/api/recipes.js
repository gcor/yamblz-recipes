import * as api from '../constants/api'

const fetchData = url => {
	return fetch(url).then(r => r.json())
}

export default {
	getRecipe (ids) {
		return fetchData(api.recipes)
	},
	getRecipeById (id) {
		return fetchData(api.recipe + id)
	}
}
