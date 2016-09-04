import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	productCard: {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: 'transparent',
		backgroundColor: 'white',
		borderRadius: 3,
		elevation: 3
	},
	productCard__image: {
		height: 100,
		marginTop: 10,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3,
		resizeMode: 'contain'
	},
	productCard__title: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		color: '#333'
	}
})
