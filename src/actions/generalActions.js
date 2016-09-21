import {
	SET_CURRRENT_RECIPE,
	SET_CURRENT_CATEGORY,
	SAVE_IN_LAST_VIEWED,
	OPEN_MODAL_BOOKMARK_SAVED,
	OPEN_MODAL_VOICE_HELP
} from '../constants/actionTypes'
import { LAST_VIEWED_KEY } from '../constants/keys'
import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'

export const setCurrentRecipe = createAction(SET_CURRRENT_RECIPE)
export const setCurrentCategory = createAction(SET_CURRENT_CATEGORY)
export const showBookmarkModal = createAction(OPEN_MODAL_BOOKMARK_SAVED)
export const showVoiceModal = createAction(OPEN_MODAL_VOICE_HELP)

export const saveInLastViewed = createAction(SAVE_IN_LAST_VIEWED, async (id) => {
	// Достаем массив с id просмотренных рецептов
	const idsFromStorage = await AsyncStorage.getItem(LAST_VIEWED_KEY)
	const ids = JSON.parse(idsFromStorage) || []
	// ищем нужный id
	const index = ids.indexOf(id)
	// если нашли, удаляем
	if (index > -1) ids.splice(index, 1)
	// и добавляем в начало списка
	ids.unshift(id)
	// ограничиваем записи пятью элементами
	const lastIds = ids.slice(0, 5)
	await AsyncStorage.setItem(LAST_VIEWED_KEY, JSON.stringify(lastIds))
})
