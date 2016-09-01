import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	suggestlist: {
		flexDirection: 'row'
	},
	suggestlist__item: {
		color: 'black',
		fontSize: ui.fontL,
		backgroundColor: '#E3E3E3',
		borderRadius: 10,
		padding: 10,
		marginLeft: 15,
		marginTop: 10
	}
})
