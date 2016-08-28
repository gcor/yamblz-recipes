import * as api from '../constants/api'
import { fetchData } from './common'

export function getCategories (ids) {
	return new Promise((resolve, reject) => {
		fetchData(api.categories)
			.then(categories => resolve(categories))
			.catch(err => reject(err))
	})
}

export function getCategoryById (id) {
	return new Promise((resolve, reject) => {
		fetchData(api.category + id)
			.then(category => resolve(category))
			.catch(err => reject(err))
	})
}

const categories = {getCategories, getCategoryById}
export default categories
