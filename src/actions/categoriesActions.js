import {
	FETCH_JUMBOTRON,
	FETCH_RECOMMEND,
	FETCH_CATEGORY
} from '../constants/actionTypes'
import { getJumbotron,
	getRecommend,
	getCategory,
	getCategoryByCurrentTime
} from '../api/categories'
import { createAction } from 'redux-actions'

export const fetchCategory = createAction(FETCH_CATEGORY, async (id) => {
	// Если приходит id, то запрашиваем конкретную категорию. Если не приходит,
	// то запрашиваем категорию в зависимости от текущего времени суток
	const category = (id) ? await getCategory(id) : await getCategoryByCurrentTime()
	if (!category) Promise.reject('No category found')
	return category
})

export const fetchJumbotron = createAction(FETCH_JUMBOTRON, async () => {
	const jumbotron = await getJumbotron()
	if (!jumbotron) Promise.reject('No jumbotron')
	return jumbotron
})

export const fetchRecommend = createAction(FETCH_RECOMMEND, async () => {
	const recommend = await getRecommend()
	if (!recommend) Promise.reject('No recommend')
	return recommend
})
