import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	suggestlist: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 30
	},
	suggestlist__item: {
		backgroundColor: '#E3E3E3',
		borderRadius: 5,
		padding: 10,
		marginLeft: 10,
		marginTop: 10
	},
	suggestlist__text: {
		fontSize: ui.fontL,
		color: 'black'
	}
})
