import React, { Component, PropTypes } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import css from './Tab.css'

class Tab extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'rgba(0,0,0,.05)'}
        style={this.props.style}
        onPress={this.props.onPress}>
        <Text style={this.props.textStyle}>{this.props.tabTitle}</Text>
      </TouchableHighlight>
    )
  }
}

export default Tab
