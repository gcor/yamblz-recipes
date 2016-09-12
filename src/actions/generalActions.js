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
		const index = ids.indexOf(id)
		if (index > -1) ids.splice(index, 1) // удаляем и добавляем снова
		ids.unshift(id)
		const lastIds = ids.slice(0, 5)
		await AsyncStorage.setItem(LAST_VIEWED_KEY, JSON.stringify(lastIds))
	} catch (error) {
		console.log(error)
	}
})
