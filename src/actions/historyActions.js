import {
	FETCH_SAVED_RECIPES,
	ADD_TO_SAVED_RECIPES,
	REMOVE_FROM_SAVED_RECIPES,
	FETCH_LAST_VIEWED
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'
import { AsyncStorage, NativeModules } from 'react-native'
import { SAVED_RECIPES_STORAGE_KEY, LAST_VIEWED_KEY, RECIPES_STORAGE_KEY } from '../constants/keys'
import { getRecipeById } from '../api/recipes'

const AppMetrica = NativeModules.AppMetrika

export const fetchSavedRecipes = createAction(FETCH_SAVED_RECIPES, async () => {
	const idsFromStorage = await AsyncStorage.getItem(SAVED_RECIPES_STORAGE_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	return await Promise.all(ids.map(getRecipeById))
})

export const fetchLastViewed = createAction(FETCH_LAST_VIEWED, async () => {
	const idsFromStorage = await AsyncStorage.getItem(LAST_VIEWED_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	return await Promise.all(ids.map(getRecipeById))
})

export const addToSavedRecipes = createAction(ADD_TO_SAVED_RECIPES, async (id) => {
	AppMetrica.addFavourite(JSON.stringify({id: id}))
	const idsFromStorage = await AsyncStorage.getItem(SAVED_RECIPES_STORAGE_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	if (ids.indexOf(id) < 0) ids.unshift(id)
	await AsyncStorage.setItem(SAVED_RECIPES_STORAGE_KEY, JSON.stringify(ids))
	const savedRecipeFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY + id) || '{}'
	const savedRecipe = JSON.parse(savedRecipeFromStorage)
	return {
		recipe: savedRecipe
	}
})

export const removeFromSavedRecipes = createAction(REMOVE_FROM_SAVED_RECIPES, async (id) => {
	AppMetrica.removeFavourite(JSON.stringify({id: id}))
	const idsFromStorage = await AsyncStorage.getItem(SAVED_RECIPES_STORAGE_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	const index = ids.indexOf(id)
	if (index > -1) ids.splice(index, 1)
	await AsyncStorage.setItem(SAVED_RECIPES_STORAGE_KEY, JSON.stringify(ids))
	const removedRecipeFromStorage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY + id) || '{}'
	const removedRecipe = JSON.parse(removedRecipeFromStorage)
	return {
		removedRecipeId: removedRecipe._id
	}
})
