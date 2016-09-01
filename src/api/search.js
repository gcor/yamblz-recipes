import { search } from '../constants/api'
import { fetchData } from './common'

export function searchFor (query) {
	return new Promise((resolve, reject) => {
		fetchData(search)
			.then(response => resolve(response))
			.catch(e => reject(e))
	})
}
