import { search } from '../constants/api'

/**
 * Запрашивает результаты поискового запроса
 *
 * @param {String} query
 * @returns {Object}
 */
export function searchFor (query) {
	return new Promise((resolve, reject) => {
		fetch(`${search}?q=${query}`)
			.then(res => res.json())
			.then(response => resolve(response))
			.catch(e => reject(e))
	})
}
