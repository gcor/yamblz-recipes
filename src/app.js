import React, { Component } from 'react'
import App from './containers/App'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()
const storeWithMiddlewares = applyMiddleware(thunk, logger)(createStore)
let store = storeWithMiddlewares(reducers())

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
