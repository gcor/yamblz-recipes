import { combineReducers } from 'redux'
import counter from './modules/counter'

const reducers = {
  counter: counter
}

const createReducers = () => (combineReducers(reducers))
export default createReducers
