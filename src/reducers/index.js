import { combineReducers } from 'redux'
import recipe from './recipe'
import categories from './categories'
import navigationState from './navigationState'
import general from './general'
import recipeSwiper from './recipeSwiper'

const reducers = {
	general,
	recipe,
	navigationState,
	categories,
	recipeSwiper
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
