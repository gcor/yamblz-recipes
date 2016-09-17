import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	searchList: {
		paddingBottom: 120
	},
	searchList__bar: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingRight: 15,
		marginBottom: 20,
		elevation: ui.elevation
	},
	searchlist__input: {
		fontSize: ui.fontL,
		paddingLeft: 20,
		borderWidth: 0,
		flex: 1
	},
	searchList__back: {
		height: 30,
		width: 30,
		marginLeft: 20,
		marginRight: 10,
		resizeMode: 'contain'
	},
	searchList__header: {
		fontSize: ui.fontL,
		paddingTop: 30,
		paddingLeft: 20,
		paddingBottom: 15
	}
})
