import * as api from '../constants/api'
import { fetchData } from './common'
import { AsyncStorage } from 'react-native'
import { CATEGORY_STORAGE_KEY } from '../constants/keys'

export function getCategories () {
	return new Promise(async (resolve, reject) => {
		const categoriesFromStorage = await AsyncStorage.getItem(CATEGORY_STORAGE_KEY)
		if (categoriesFromStorage !== null) {
			const cachedCategories = JSON.parse(categoriesFromStorage) || {}
			console.log('из кэша')
			resolve(cachedCategories)
		} else {
			fetchData(api.categories)
				.then((categories) => {
					resolve(categories)
					AsyncStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories))
				})
				.catch(err => reject(err))
		}
	})
}

const categories = {getCategories}
export default categories
