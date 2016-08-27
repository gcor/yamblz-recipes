import * as api from '../constants/api'

const fetchData = url => {
	return fetch(url).then(r => r.json())
}

export default {
	getCategories (ids) {
		return fetchData(api.categories)
	},
	getCategoryById (id) {
		return fetchData(api.category + id)
	}
}
