import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'


import s from './style'

class NavigationView extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the NavigationView!</Text>
      </View>
    )
  }
}

export default NavigationView
