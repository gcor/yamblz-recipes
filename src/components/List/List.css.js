import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
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
	item__value: {
		fontSize: ui.fontM,
		color: 'black',
		width: Dimensions.get('window').width - 80,
		marginLeft: 50
	},
	item__action: {
		padding: 10,
		marginLeft: 40,
		fontSize: ui.fontXS,
		lineHeight: 30,
		color: '#767676'
	}
})
