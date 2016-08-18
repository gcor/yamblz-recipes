import { TabBarIOS, Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as navigationActions } from 'react-native-navigation-redux-helpers'

const { jumpTo } = navigationActions

class ApplicationTabs extends Component {
  _renderTabContent (tab) {
    switch (tab.key) {
      case 'feed': return <Text>Feed</Text>
      case 'notifications': return <Text>Notifications</Text>
      case 'settings': return <Text>Settings</Text>
      default: return <Text>empty</Text>
    }

  }

  render () {
    const { dispatch, navigation } = this.props
    const children = navigation.routes.map((tab, i) => {
      return (
        <View style={{height: 50, width: 150}} key={tab.key}>
          <Text
            icon={tab.icon}
            selectedIcon={tab.selectedIcon}
            title={tab.title}
            onPress={() => dispatch(jumpTo(i, navigation.key))}
            selected={this.props.navigation.index === i}>
            { this._renderTabContent(tab) }
          </Text>
        </View>
      )
    })
    return (
      <TabBarIOS tintColor="black">
        {children}
      </TabBarIOS>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

function mapStateToProps (state) {
  return {
    navigation: state.tabs
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs)
