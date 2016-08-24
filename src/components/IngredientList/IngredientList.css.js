import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	ingredients__listContainer: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: ui.lightgray
	},
	ingredients__listItem: {
		paddingBottom: 10,
		paddingTop: 10,
		paddingRight: 10,
		borderLeftWidth: 0,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 1,
		borderColor: ui.lightgray,
		marginLeft: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	ingredients__listItem_last: {
		borderBottomWidth: 0
	},
	ingredient__title: {
		fontSize: ui.fontXL
	},
	portion__title: {
		fontSize: ui.fontXL
	},
	portion__number: {
		fontSize: ui.fontXL
	},
	portion__increment: {
		fontSize: ui.fontXL
	},
	portion__decrement: {
		fontSize: ui.fontXL
	},
	portion__count: {
		flexDirection: 'row'
	},
	portion: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 10
	}
})
