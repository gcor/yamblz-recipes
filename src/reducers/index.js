import { combineReducers } from 'redux'
import recipe from './recipe'
import categories from './categories'
import navigationState from './navigationState'

const reducers = {
	recipe,
	navigationState,
	categories
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
