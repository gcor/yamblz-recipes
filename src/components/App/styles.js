import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
  el: {
    backgroundColor: ui.background,
    height: 50,
    width: 100,
    margin: 10
  },
  main: {
    flex: 1,
    flexDirection: 'row'
  }
})
