import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { increment, decrement } from '../../store/modules/counter'
import { connect } from 'react-redux'

import s from './styles'

class App extends Component {
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

const stateToProps = state => ({
  count: state.counter.count
})

const dispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(stateToProps, dispatchToProps)(App)
