import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	portions: {
		height: 56,
		alignItems: 'center',
		paddingLeft: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	portions__controls: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	portions__text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#444'
	},
	controls__button: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10
	},
	controls__button_plus: {
		paddingRight: 25
	},
	controls__value: {
		textAlign: 'center',
		width: 40
	},

	ingredients: {
		marginBottom: 5,
		elevation: 2,
		backgroundColor: 'white'
	},
	ingredients__item: {
		borderBottomWidth: 1,
		flex: 1,
		flexDirection: 'row',
		height: 84,
		borderBottomColor: '#eee'
	},
	ingredients__imageBox: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 8
	},
	ingredients__image: {
		height: 64,
		width: 64,
		resizeMode: 'contain'
	},
	ingredients__content: {
		flex: 3,
		marginLeft: 25,
		marginRight: 25
	},
	ingredients__title: {
		fontSize: 20,
		color: 'black',
		marginTop: 16
	},
	ingredients__amount: {
		fontSize: 16,
		color: 'rgba(0,0,0,.6)',
		marginTop: 6
	},

	extraIngredients: {
		marginTop: 5
	},
	extraIngredients__item: {
		flex: 1,
		flexDirection: 'row',
		height: 84,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: 'white',
		elevation: 2
	},

	closeButton: {
		position: 'absolute',
		top: 15,
		right: 15
	}
})
