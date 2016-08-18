import React, { Component } from 'react'
import {
  View
} from 'react-native'

import Counter from '../Counter'
// import FirstScreen from '../../containers/FirstScreen'
import Navigation from '../Navigation'
import Tabs from '../Tabs'
import Recipe from '../Recipe'

class App extends Component {
  render () {
    return (
      <View>
        <Counter />
        <Tabs />
        <Recipe />
      </View>
    )
  }
}

export default App
