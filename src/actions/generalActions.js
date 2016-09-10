import {
	SET_CURRRENT_RECIPE,
	IS_FETCHED_CATEGORIES,
	SAVE_IN_LAST_VIEWED
} from '../constants/actionTypes'
import { LAST_VIEWED_KEY } from '../constants/keys'
import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'

export const setCurrentRecipe = createAction(SET_CURRRENT_RECIPE)

// Function, that executes when the categories are first fetched.
export const isFetchedCategories = createAction(IS_FETCHED_CATEGORIES)

export const saveInLastViewed = createAction(SAVE_IN_LAST_VIEWED, async (id) => {
	try {
		const idsFromStorage = await AsyncStorage.getItem(LAST_VIEWED_KEY)
		const ids = JSON.parse(idsFromStorage) || []
		if (ids.indexOf(id) < 0) ids.push(id)
		const lastIds = ids.slice(0, 10)
		await AsyncStorage.setItem(LAST_VIEWED_KEY, JSON.stringify(lastIds))
	} catch (error) {
		console.log(error)
	}
})
