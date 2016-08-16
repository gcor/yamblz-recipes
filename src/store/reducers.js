import { combineReducers } from 'redux-immutable'

const applicationReducers = {
  removeThisReducerOnceYouAddALegitOne: () => ({})
}

export default function createReducer () {
  return combineReducers(applicationReducers)
}
