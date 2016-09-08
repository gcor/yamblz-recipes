import * as _ from 'lodash'
import * as api from '../constants/api'
import { fetchData } from './common'
import { AsyncStorage } from 'react-native'
import { CATEGORY_STORAGE_KEY, CATEGORY_STORAGE_VERSION } from '../constants/keys'

function _getVersionsFromCollection (collection) {
	return collection.map(arr => arr.__v)
}

export function getCategories () {
	return new Promise(async (resolve, reject) => {
		const categoriesVersionsFromStorage = await AsyncStorage.getItem(CATEGORY_STORAGE_VERSION)
		const categoriesFromStorage = await AsyncStorage.getItem(CATEGORY_STORAGE_KEY) || '[]'
		const cachedCategories = JSON.parse(categoriesFromStorage)
		const cachedVersion = JSON.parse(categoriesVersionsFromStorage) || []
		const cachedCategoriesVersion = _getVersionsFromCollection(cachedCategories)
		if (cachedVersion.length && _.isEqual(cachedVersion, cachedCategoriesVersion)) {
			console.log('из кэша', cachedCategories)
			resolve(cachedCategories)
		} else {
			fetchData(api.categories)
				.then((categories) => {
					const versions = _getVersionsFromCollection(categories)
					resolve(categories)
					AsyncStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories))
					AsyncStorage.setItem(CATEGORY_STORAGE_VERSION, JSON.stringify(versions))
				})
				.catch(err => reject(err))
		}
	})
}

const categories = {getCategories}
export default categories
