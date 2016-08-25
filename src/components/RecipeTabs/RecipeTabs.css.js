import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	tabs: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: 20,
		marginRight: 20
	},
	tabs__item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 70,
		borderBottomWidth: 3,
		borderBottomColor: 'transparent'
	},
	tabs__item_active: {
		borderBottomColor: ui.yellow
	},
	tabs__itemText: {
		fontSize: ui.fontM,
		fontWeight: 'bold',
		color: '#333'
	}
})
