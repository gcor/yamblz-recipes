import * as api from '../constants/api'
import { fetchData } from './common'
import { AsyncStorage } from 'react-native'
import {
	RECIPES_STORAGE_KEY,
	SAVED_RECIPES_STORAGE_KEY
} from '../constants/keys'

export function getRecipeById (id) {
	return new Promise(async (resolve, reject) => {
		const historyRecipesFromStorage = await AsyncStorage.getItem(SAVED_RECIPES_STORAGE_KEY)
		const historyRecipes = JSON.parse(historyRecipesFromStorage) || []
		const recipeFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY + id) || '{}'
		const cachedRecipe = JSON.parse(recipeFromStorage)
		if (cachedRecipe._id === id) {
			cachedRecipe.isFavourite = (historyRecipes.indexOf(id) >= 0)
			resolve(cachedRecipe)
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
