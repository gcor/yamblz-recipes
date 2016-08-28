import { combineReducers } from 'redux'
import recipe from './recipe'
import categories from './categories'
import navigationState from './navigationState'
import general from './general'

const reducers = {
	general,
	recipe,
	navigationState,
	categories
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
