import * as api from '../constants/api'
import { AsyncStorage } from 'react-native'
import {
	RECIPES_STORAGE_KEY,
	SAVED_RECIPES_STORAGE_KEY
} from '../constants/keys'

/**
 * Проверяет кеш на наличие рецепта по его id. Если рецепт есть, берем из кеша.
 * Если нет, то делает запрос рецепта и кладет его сразу в кеш
 *
 * @param {String} id идентификатор рецепта
 * @returns {Object} рецепт
 */
export function getRecipeById (id) {
	return new Promise(async (resolve, reject) => {
		// AsyncStorage.clear()
		const historyRecipesFromStorage = await AsyncStorage.getItem(SAVED_RECIPES_STORAGE_KEY)
		const historyRecipes = JSON.parse(historyRecipesFromStorage) || []
		const recipeFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY + id) || '{}'
		const cachedRecipe = JSON.parse(recipeFromStorage)
		if (cachedRecipe._id === id) {
			cachedRecipe.isFavourite = (historyRecipes.indexOf(id) >= 0)
			resolve(cachedRecipe)
		} else {
			fetch(api.recipes + id)
				.then(res => res.json())
				.then((recipe) => {
					resolve(recipe)
					AsyncStorage.setItem(RECIPES_STORAGE_KEY + id, JSON.stringify(recipe))
				})
				.catch(err => reject(err))
		}
	})
}
export default { getRecipeById }
