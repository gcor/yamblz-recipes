import {
	FETCH_CATEGORIES,
	FETCH_JUMBOTRON,
	FETCH_RECOMMEND,
	FETCH_CATEGORY
} from '../constants/actionTypes'
import { getCategories, getJumbotron, getRecommend, getCategory } from '../api/categories'
import { isFetchedCategories } from './generalActions'
import { createAction } from 'redux-actions'
import { formatImageSrc } from '../utils'

export const fetchCategories = createAction(FETCH_CATEGORIES, async () => {
	const categories = await getCategories()
	if (!categories) Promise.reject('No categories found')
	categories.forEach(category => {
		category.recipes.forEach(recipe => {
			recipe.image = formatImageSrc(recipe.image)
		})
	})
	return categories
})

export const fetchCategory = createAction(FETCH_CATEGORY, async () => {
	const category = await getCategory()
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
// export const fetchCategories = () => (dispatch, getState) => {
// 	if (getState().general.fetched.categories) {
// 		return false // Categories has already been fetched.
// 	}
// 	getCategories()
// 		.then(categories => {
// 			// Fix http protocol image
// 			categories.forEach(category => {
// 				category.recipes.forEach(recipe => {
// 					recipe.image = formatImageSrc(recipe.image)
// 				})
// 			})
// 			dispatch(_fetchCategories(categories))
// 			dispatch(isFetchedCategories(true))
// 		})
// }
