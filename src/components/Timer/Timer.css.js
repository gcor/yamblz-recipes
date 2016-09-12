import { StyleSheet } from 'react-native'
import s from '../../constants/css'
import ui from '../../constants/css'

export default StyleSheet.create({
	timer: {
		backgroundColor: 'white',
		padding: 5,
		paddingBottom: 0,
		borderTopWidth: 1,
		borderColor: '#F4F3F1'
	},
	text: {
		textAlign: 'center',
		color: 'red'
	},
	button: {
		backgroundColor: s.yellow,
		padding: 15,
		margin: 10,
		marginBottom: 0
	},
	buttonText: {
		textAlign: 'center',
		color: 'black',
		fontWeight: 'bold'
	},
	yellowPoint: {
		backgroundColor: ui.yellow
	},
	item: {
		marginTop: 24,
		marginBottom: 24
	},
	buttonInactive: {
		backgroundColor: '#F1EFEC'
	},
	textInactive: {
		color: '#A3A2A0'
	}
})
