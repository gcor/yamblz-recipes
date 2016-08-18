import { NavigationExperimental } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'

const {
  popRoute,
  pushRoute
} = actions

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class Navigation extends Component {
  render () {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        renderOverlay={this._renderOverlay}
        renderScene={this._renderScene}/>
    )
  }
  onGoBack () {
    const { dispatch, navigation } = this.props
    dispatch(popRoute(navigation.key))
  }

  onGoSomewhere () {
    const { dispatch, navigation } = this.props
    dispatch(pushRoute({ key: 'sowhere else' }, navigation.key))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

function mapStateToProps (state) {
  return {
    navigation: state.cardNavigation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
