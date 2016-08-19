import {
  Text,
  View,
  TouchableHighlight,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as navigationActions } from 'react-native-navigation-redux-helpers'

import styles from './styles'

import Counter from '../Counter'

const { jumpTo, pushRoute } = navigationActions

class ApplicationTabs extends Component {
  renderTabContent (tab) {
    switch (tab) {
      case 'feed': return <Text>Feed</Text>
      case 'new': return <Text>New</Text>
      default: return <Counter />
    }
  }

  render () {
    const { navigation } = this.props
    const onNavigate = action => {
      this.drawer.closeDrawer()
      this.props.dispatch(action)
    }

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {this.props.navigation.routes.map((t, i) => {
          return (
            <TouchableHighlight
              onPress={() => onNavigate(jumpTo(i, navigation.key))}
              key={t.key}>
              <Text>{t.title}</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    )
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
				{this.renderApp()}
      </DrawerLayoutAndroid>
		)
  }

  renderApp () {
    const selectedTab = this.props.navigation.routes[this.props.navigation.index]
    const actions = [{
      title: 'New Item',
      icon: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
      show: 'always',
      showWithText: false
    }]
    return (
      <View style={{ flex: 1 }}>
        <ToolbarAndroid
          actions={actions}
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title={selectedTab.title}
          onActionSelected={this.onActionSelected.bind(this)}
				/>
				{this.renderTabContent(selectedTab)}
      </View>
    )
  }

  onActionSelected (position) {
    const { dispatch } = this.props
    if (position === 0) {
      dispatch(pushRoute({
        key: 'new',
        title: 'Main Screen',
        showBackButton: true
      }, 'global'))
    }
  }
}

const stateToProps = state => ({
  navigation: state.tabs
})
const dispatchToProps = dispatch => ({
  dispatch
})

export default connect(stateToProps, dispatchToProps)(ApplicationTabs)
