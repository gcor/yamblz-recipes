import {
	FETCH_CATEGORIES
} from '../constants/actionTypes'
import { getCategories, getCategoryById } from '../api/categories'
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
