import { NavigationExperimental, Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-native-navigation-redux-helpers'
import Tabs from '../Tabs'
import Home from '../../containers/Home'

const {
  popRoute,
  pushRoute
} = actions

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
    this.renderOverlay = this.renderOverlay.bind(this)
  }
  render () {
    return (
      <NavigationCardStack
        onNavigate={() => {}}
        navigationState={this.props.navigation}
        renderOverlay={this.renderOverlay}
        renderScene={this.renderScene} />
    )
  }

  renderScene (props) {
    console.log(props.scene.route.key)
    let fake = 'new'
    switch (props.scene.route.key) {
      case 'new':
        return (
          <View style={{flex: 1}}>
            <Tabs />
          </View>
        )
      case 'applicationTabs': return <Home/>
      default:
        return (
          <View style={{flex: 1}}>
            <Text style={{color: 'blue'}}>default tab</Text>
          </View>
        )
    }
  }

  renderOverlay (props) {
    return null
  }

  onGoBack () {
    const { dispatch, navigation } = this.props
    dispatch(popRoute(navigation.key))
  }

  onGoSomewhere () {
    const { dispatch, navigation } = this.props
    dispatch(pushRoute({ key: 'new' }, navigation.key))
  }
}

const dispatchToProps = dispatch => ({
  dispatch
})

const stateToProps = state => ({
  navigation: state.navigation
})

export default connect(stateToProps, dispatchToProps)(Navigation)
