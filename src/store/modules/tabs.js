import { tabReducer } from 'react-native-navigation-redux-helpers'

const tabs = {
  routes: [
    { key: 'feed', title: 'Items' },
    { key: 'notifications', title: 'Notifications' },
    { key: 'settings', title: 'Settings' }
  ],
  key: 'ApplicationTabs',
  index: 0
}

module.exports = tabReducer(tabs)
