import { createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable'
import createReducer from './reducers'
import devTools from 'remote-redux-devtools'

const configureStore = (initialState = fromJS({})) => {
  if (__DEV__) {
    const createStoreWithMiddleware = compose(devTools())(createStore)
    return createStoreWithMiddleware(createReducer(), initialState)
  }

  return createStore(createReducer(), initialState)
}

module.exports = configureStore
