import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	stages: {
		paddingTop: 20,
		paddingBottom: 20
	},
	stages__item: {
		height: 70,
		marginLeft: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	stages__title: {
		fontSize: ui.fontL,
		color: 'black'
	}
})
