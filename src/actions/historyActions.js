import {
	FETCH_HISTORY,
	ADD_TO_HISTORY,
	REMOVE_FROM_HISTORY,
	FETCH_LAST_VIEWED
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'
import { AsyncStorage } from 'react-native'
import { HISTORY_STORAGE_KEY, LAST_VIEWED_KEY } from '../constants/keys'
import { getRecipeById } from '../api/recipes'

export const fetchHistory = createAction(FETCH_HISTORY, async () => {
	const idsFromStorage = await AsyncStorage.getItem(HISTORY_STORAGE_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	return await Promise.all(ids.map(getRecipeById))
})

export const fetchLastViewed = createAction(FETCH_LAST_VIEWED, async () => {
	const idsFromStorage = await AsyncStorage.getItem(LAST_VIEWED_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	return await Promise.all(ids.map(getRecipeById))
})

export const addToHistory = createAction(ADD_TO_HISTORY, async (id) => {
	try {
		console.log('a')
		const idsFromStorage = await AsyncStorage.getItem(HISTORY_STORAGE_KEY)
		const ids = JSON.parse(idsFromStorage) || []
		if (ids.indexOf(id) < 0) ids.push(id)
		await AsyncStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(ids))
	} catch (error) {
		console.log(error)
	}
})

export const removeFromHistory = createAction(REMOVE_FROM_HISTORY, async (id) => {
	try {
		console.log('r')
		const idsFromStorage = await AsyncStorage.getItem(HISTORY_STORAGE_KEY)
		const ids = JSON.parse(idsFromStorage) || []
		const index = ids.indexOf(id)
		if (index > -1) ids.splice(index, 1)
		console.log(ids)
		await AsyncStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(ids))
	} catch (error) {
		console.log(error)
	}
})
