import React, { Component } from 'react'
import { View, Text} from 'react-native'

class Recipe extends Component {
  render () {
    return (
      <Text>{this.state.data}</Text>
    )
  }
}

export default Recipe
