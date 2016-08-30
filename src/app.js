import React, { Component } from 'react'
import App from './containers/App'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
// import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
// import devTools from 'remote-redux-devtools'

import { LOADING, SUCCESS, ERROR } from './constants/actionTypes'

// const loggerMiddleware = createLogger()
const enhancer = compose(
	applyMiddleware(
		thunkMiddleware,
		promiseMiddleware({
			promiseTypeSuffixes: [LOADING, SUCCESS, ERROR]
		}),
		// loggerMiddleware
	),
	global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope,
)
// const storeWithMiddlewares = (createStore)
let store = createStore(reducers(), enhancer)
if (global.reduxNativeDevTools) {
	global.reduxNativeDevTools.updateStore(store)
}

class Root extends Component {
	render () {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

export default Root
