import { combineReducers } from 'redux'
import counter from './counter'
import navigation from './navigation'
import tabs from './tabs'
import recipe from './recipe'

const reducers = {
	counter,
	navigation,
	tabs,
	recipe
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
