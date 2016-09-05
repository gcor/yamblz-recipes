import {
	FETCH_HISTORY,
	ADD_TO_HISTORY,
	REMOVE_FROM_HISTORY
} from '../constants/actionTypes'
import { HISTORY_STORAGE_KEY } from '../constants/keys'

import { createAction } from 'redux-actions'
import { getRecipeById } from '../api/recipes'
import { AsyncStorage } from 'react-native'

export const fetchHistory = createAction(FETCH_HISTORY, async () => {
	const idsFromStorage = await AsyncStorage.getItem(HISTORY_STORAGE_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	return await Promise.all(ids.map(getRecipeById))
})

export const addToHistory = createAction(ADD_TO_HISTORY, async (id) => {
	try {
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
		const idsFromStorage = await AsyncStorage.getItem(HISTORY_STORAGE_KEY)
		const ids = JSON.parse(idsFromStorage) || []
		const index = ids.indexOf(id)
		if (index > -1) ids.splice(index, 1)
		await AsyncStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(ids))
	} catch (error) {
		console.log(error)
	}
})
