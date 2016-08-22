import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	tile: {
		// backgroundColor: 'lightgreen',
		// flexWrap: 'nowrap'
	},
	tile__title: {
		fontSize: ui.fontXS,
		color: ui.gray,
		marginLeft: 10,
		marginBottom: 10,
		marginTop: 25
	},
	tile__list: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginLeft: 10,
		marginRight: 10
	},
	tile__item: {
		width: Dimensions.get('window').width * 0.50 - 17.5,
		height: Dimensions.get('window').width * 0.50 - 17.5,
		marginBottom: 15,
		borderWidth: 0,
		elevation: ui.elevation
	}
})
