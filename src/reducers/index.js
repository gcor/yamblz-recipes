import { combineReducers } from 'redux'
import recipe from './recipe'
import navigationState from './navigationState'

const reducers = {
	recipe,
	navigationState
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
