import * as api from '../constants/api'
import { fetchData } from './common'
import { AsyncStorage } from 'react-native'
import { RECIPES_STORAGE_KEY } from '../constants/keys'

export function getRecipeById (id) {
	return new Promise(async (resolve, reject) => {
		const recipesFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY + id)
		if (recipesFromStorage !== null) {
			const cachedRecipes = JSON.parse(recipesFromStorage) || {}
			console.log('из кэша')
			resolve(cachedRecipes)
		} else {
			fetchData(api.recipes + id)
				.then((recipe) => {
					resolve(recipe)
					AsyncStorage.setItem(RECIPES_STORAGE_KEY + id, JSON.stringify(recipe))
				})
				.catch(err => reject(err))
		}
	})
}
export default { getRecipeById }
