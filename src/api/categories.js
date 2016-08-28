import * as api from '../constants/api'
import { fetchData } from './common'

export default {
	getCategories (ids) {
		return new Promise((resolve, reject) => {
			fetchData(api.categories)
				.then(categories => resolve(categories))
				.catch(err => reject(err))
		})
	},
	getCategoryById (id) {
		return new Promise((resolve, reject) => {
			fetchData(api.category + id)
				.then(category => resolve(category))
				.catch(err => reject(err))
		})
	}
}
