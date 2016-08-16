import React, { Component } from 'react'
import App from './components/App'
import { Provider } from 'react-redux'
import createStore from './store/createStore'

const store = createStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

module.exports = Root
