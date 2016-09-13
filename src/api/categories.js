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

export function getCategory () {
	return new Promise((resolve, reject) => {
		// console.log(api.categories + id)
		let id
		const now = (new Date()).getHours()
		if (now > 3 && now <= 11) {
			id = '57bfd586a53d1d73154d933a'
		} else if (now > 11 && now <= 17) {
			id = '57bfe68c624944001682a016'
		} else id = '57c000266c25f8411701256e'
		fetchData(api.categories + id)
			.then(category => resolve(category))
			.catch(err => reject(err))
	})
}

export function getJumbotron () {
	const now = (new Date()).getHours()
	let dayTime = 'breakfast'

	if (now > 3 && now <= 11) {
		dayTime = 'breakfast'
	} else if (now > 11 && now <= 17) {
		dayTime = 'lunch'
	} else dayTime = 'supper'

	return new Promise(async (resolve, reject) => {
		fetch(api.time[dayTime])
			.then(res => res.json())
			.then(jumbotron => resolve(jumbotron))
			.catch(e => reject(e))
	})
}
export function getRecommend () {
	return new Promise(async (resolve, reject) => {
		fetch(api.recommend)
			.then(res => res.json())
			.then(recommend => resolve(recommend))
			.catch(e => reject(e))
	})
}

const categories = {getCategories}
export default categories
