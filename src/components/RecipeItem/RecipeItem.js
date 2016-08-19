import React, { Component } from 'react'
import { View, Text} from 'react-native'

class Recipe extends Component {
  constructor () {
    super()
    this.state = {
      data: 'no data'
    }
  }
  componentWillMount () {
    this.setState({
      data: 'no data'
    })

    fetch('http://google.com')
      .then(r => {
        this.setState({
          data: r.status
        })
      })
  }
  render () {
    return (
      <Text>{this.state.data}</Text>
    )
  }
}

export default Recipe
