import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
  list: {
    marginLeft: 25,
    marginRight: 10
  },
  item: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  item__point: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: ui.lightgray,
    marginRight: 15
  },
  item__point_active: {},
  item__value: {
    fontSize: ui.fontL,
    color: 'black'
  }
})
