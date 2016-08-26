import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	slider: {},
	slider__title: {
		fontSize: ui.fontS,
		color: ui.gray,
		marginLeft: 10,
		marginBottom: 15,
		marginTop: 25
	},
	slider__item: {
		width: Dimensions.get('window').width * 0.85,
		marginLeft: 10,
		marginBottom: 10
	}
})
