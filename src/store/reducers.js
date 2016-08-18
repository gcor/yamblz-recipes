import { combineReducers } from 'redux'
import counter from './modules/counter'
import navigation from './modules/navigation'
import tabs from './modules/tabs'

const reducers = {
  counter,
  navigation,
  tabs
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
