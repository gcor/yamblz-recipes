import { combineReducers } from 'redux'
import tabs from './tabs'
import recipe from './recipe'
import navigationState from './navigationState'

const reducers = {
	tabs,
	recipe,
	navigationState
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
