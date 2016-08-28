import {
	FETCH_CATEGORIES
} from '../constants/actionTypes'
import { getCategories, getCategoryById } from '../api/categories'
import { createAction } from 'redux-actions'
import { formatImageSrc } from '../utils'

const _fetchCategories = createAction(FETCH_CATEGORIES)
export const fetchCategories = () => dispatch => {
	console.log('function was called')
	getCategories()
		.then(categories => {
			// Fix http protocol image
			categories.forEach(category => {
				category.recipes.forEach(recipe => {
					recipe.image = formatImageSrc(recipe.image)
				})
			})
			dispatch(_fetchCategories(categories))
		})
}
