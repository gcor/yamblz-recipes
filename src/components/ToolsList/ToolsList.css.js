import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	toolslist: {
		marginTop: 16,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 20,
		flexDirection: 'column',
		flex: 1,
		elevation: ui.elevation,
		backgroundColor: 'white'
	},
	toolslist__title: {
		fontSize: ui.fontS,
		color: ui.gray,
		marginLeft: 25,
		marginTop: 25
	},
	toolslist__item: {
		borderBottomWidth: 1,
		borderBottomColor: ui.lightgray,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 15
	},
	toolslist__text: {
		fontSize: ui.fontL,
		color: 'black'
	}
})
