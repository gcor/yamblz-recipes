import { combineReducers } from 'redux'
import counter from './counter'
import navigation from './navigation'
import tabs from './tabs'

const reducers = {
	counter,
	navigation,
	tabs
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
