import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	header: {
		backgroundColor: ui.yellow,
		flexDirection: 'row',
		alignItems: 'center'
	},
	header__title: {
		fontSize: ui.fontL
	},
	container: {
		flex: 1
	},
	page: {
		marginTop: 60
	}
})
