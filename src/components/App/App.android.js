import React, { Component } from 'react'
import {
  View
} from 'react-native'

import Counter from '../Counter'
// import FirstScreen from '../../containers/FirstScreen'
import Navigation from '../Navigation'
import Tabs from '../Tabs'

class App extends Component {
  render () {
    return (
      <View>
        <Counter />
        <Tabs />
      </View>
    )
  }
}

export default App
