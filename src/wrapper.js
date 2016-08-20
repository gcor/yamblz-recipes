import React from 'react'
import App from './components/App'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()
const storeWithMiddlewares = applyMiddleware(thunk, logger)(createStore)
let store = storeWithMiddlewares(reducers())

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

module.exports = Root
