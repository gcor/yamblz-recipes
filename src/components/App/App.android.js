import React, { Component } from 'react'
import { View } from 'react-native'

// import Counter from '../Counter'
// import FirstScreen from '../../containers/FirstScreen'
import Navigation from '../Navigation'
// import Tabs from '../Tabs'
// import NavigationView from '../NavigationView'
// import Recipe from '../Recipe'

class App extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    )
  }
}

export default App
