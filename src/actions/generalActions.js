import {
	SET_CURRRENT_RECIPE,
	IS_FETCHED_CATEGORIES
 } from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const setCurrentRecipe = createAction(SET_CURRRENT_RECIPE)

// Function, that executes when the categories are first fetched.
export const isFetchedCategories = createAction(IS_FETCHED_CATEGORIES)
