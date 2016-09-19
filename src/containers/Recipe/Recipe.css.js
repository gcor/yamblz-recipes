import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	bonappetite: {
		flex: 1,
		height: 75,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		elevation: 1,
		backgroundColor: 'white',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 20
	},
	bonappetite__text: {
		fontSize: ui.fontXL,
		color: 'black'
	}
})
