import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
  tabs: {
		flex: 1,
		flexDirection: 'row'
	},
	tabs__item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    height: 70,
    borderBottomWidth: 3,
    borderBottomColor: ui.gray
	},
  tabs__item_active: {
    borderBottomColor: ui.yellow
  },
  tabs__itemText: {
    fontSize: ui.fontS,
    fontWeight: 'bold',
    color: '#333'
  }
})
