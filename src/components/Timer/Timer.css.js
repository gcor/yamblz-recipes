import { StyleSheet } from 'react-native'
import s from '../../constants/css'

export default StyleSheet.create({
	timer: {
		height: 100,
		backgroundColor: 'white',
		padding: 5,
		margin: 10
	},
	text: {
		textAlign: 'center',
		color: 'red'
	},
	button: {
		backgroundColor: s.yellow,
		padding: 20,
		margin: 10
	},
	buttonText: {
		textAlign: 'center',
		color: 'black',
		fontWeight: 'bold'
	}
})
