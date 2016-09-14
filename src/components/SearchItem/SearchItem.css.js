import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	searchItem: {
		backgroundColor: 'white',
		padding: 20,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: ui.lightgray,
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchItem__icon: {
		width: 25,
		height: 20,
		resizeMode: 'contain'
	},
	searchItem__title: {
		color: 'black',
		fontSize: ui.fontL,
		paddingLeft: 20,
		flex: 1
	}
})
