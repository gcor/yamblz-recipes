import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	header_white: {
		backgroundColor: 'white'
	},
	header__button: {
		height: 60,
		backgroundColor: 'silver',
		justifyContent: 'center'
	},
	header__icon: {
		width: 20,
		height: 20,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: 'white'
	},
	header__title: {
		color: 'black',
		fontSize: ui.fontL
	}
})
