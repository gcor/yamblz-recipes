import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	list: {},
	item: {
		marginTop: 8,
		marginBottom: 8
	},
	item__point: {
		width: 10,
		height: 10,
		borderRadius: 100,
		backgroundColor: ui.lightgray,
		position: 'absolute',
		left: 20,
		top: 8
	},
	item__point_active: {},
	item__value: {
		fontSize: ui.fontL,
		lineHeight: 30,
		color: 'black',
		width: Dimensions.get('window').width - 80,
		marginLeft: 50
	}
})
