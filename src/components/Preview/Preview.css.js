import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	preview: {
		flex: 1,
		height: 200,
		backgroundColor: 'silver',
		justifyContent: 'center'
	},
	preview__header: {
		textAlign: 'center',
		fontSize: ui.fontXL,
		fontWeight: 'bold',
		color: 'black'
	},
	preview__text: {
		textAlign: 'center',
		fontSize: ui.fontM,
		paddingTop: 5,
		color: 'black'
	}
})
