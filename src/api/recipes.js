import * as api from '../constants/api'
import { fetchData } from './common'
import { AsyncStorage } from 'react-native'
import { RECIPES_STORAGE_KEY, RECIPES_STORAGE_VERSION } from '../constants/keys'

export function getRecipeById (id) {
	return new Promise(async (resolve, reject) => {
		const recipeVersionFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_VERSION + id)
		const recipeFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY + id) || '{}'
		const cachedRecipe = JSON.parse(recipeFromStorage)
		const cachedRecipeVersion = cachedRecipe.__v
		const cachedVersion = parseInt(recipeVersionFromStorage, 10)
		if (!isNaN(cachedVersion) && (cachedVersion === cachedRecipeVersion)) {
			console.log('из кэша')
			resolve(cachedRecipe)
		} else {
			fetchData(api.recipes + id)
				.then((recipe) => {
					resolve(recipe)
					AsyncStorage.setItem(RECIPES_STORAGE_KEY + id, JSON.stringify(recipe))
					AsyncStorage.setItem(RECIPES_STORAGE_VERSION + id, `${recipe.__v}`)
				})
				.catch(err => reject(err))
		}
	})
}
export default { getRecipeById }
