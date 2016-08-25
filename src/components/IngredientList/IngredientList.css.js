import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	ingredients: {
		paddingTop: 20,
		paddingBottom: 20
	},
	ingredients__item: {
		borderBottomWidth: 1,
		borderBottomColor: ui.lightgray,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		height: 70,
		marginLeft: 15
	},
	ingredients__left: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	ingredients__title: {
		fontSize: ui.fontL,
		color: 'black'
	},
	ingredients__portions: {
		marginLeft: 0,
		paddingLeft: 15
	},
	ingredients__right: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	ingredients__counter: {
		fontSize: ui.fontXL,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'right'
	},
	ingredients__measure: {
		fontSize: ui.fontM,
		color: 'black'
	},
	bold: {
		fontWeight: 'bold'
	}
})
