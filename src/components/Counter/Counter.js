import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import s from './styles'

class Counter extends Component {
  render () {
    return (
      <View>
        <View style={s.main}>
          <View style={s.el}>
            <Text onPress={() => this.props.increment()}>
              Increment
            </Text>
          </View>
          <View style={s.el}>
            <Text onPress={() => this.props.decrement()}>
              Decrement
            </Text>
          </View>
        </View>
        <View>
          <Text>{this.props.count}</Text>
        </View>
      </View>
    )
  }
}

export default Counter
