import { combineReducers } from 'redux'
import recipe from './recipe'
import categories from './categories'
import navigationState from './navigationState'
import general from './general'
import recipeSwiper from './recipeSwiper'
import search from './search'

const reducers = {
	general,
	recipe,
	navigationState,
	categories,
	recipeSwiper,
	search
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
