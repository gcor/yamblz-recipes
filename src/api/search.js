import { search } from '../constants/api'
import { fetchData } from './common'

/**
 * Запрашивает результаты поискового запроса
 *
 * @param {String} query
 * @returns {Object}
 */
export function searchFor (query) {
	return new Promise((resolve, reject) => {
		const q = `${search}?q=${query}`
		fetchData(q)
			.then(response => resolve(response))
			.catch(e => reject(e))
	})
}
