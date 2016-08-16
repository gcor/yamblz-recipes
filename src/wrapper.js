import React, { Component } from 'react'
import App from './components/App'
import { Provider } from 'react-redux'

const init = () => {
  class Root extends Component {
    render () {
      return (
        <Provider>
          <App />
        </Provider>
      )
    }
  }
}

module.exports = App
