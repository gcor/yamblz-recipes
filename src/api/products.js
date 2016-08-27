import * as api from '../constants/api'

const fetchData = url => {
	return fetch(url).then(r => r.json())
}

export default {
	getProduct (ids) {
		return fetchData(api.products)
	},
	getProductById (id) {
		return fetchData(api.product + id)
	}
}
