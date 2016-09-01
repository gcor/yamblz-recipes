import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	cardSmall: {
		marginBottom: 8
	},
	cardSmall__container: {
		flex: 1,
		borderRadius: 2,
		marginLeft: 8,
		marginRight: 8
	},
	cardSmall__title: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	},
	cardSmall__amount: {
		color: 'white',
		fontSize: 16,
		marginTop: 6
	},
	cardSmall__image: {
		flex: 1,
		height: 130,
		borderRadius: 2
	},
	cardSmall__backgroundShadow: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		padding: 16,
		borderRadius: 5,
		backgroundColor: 'rgba(0,0,0,.1)'
	}
})
