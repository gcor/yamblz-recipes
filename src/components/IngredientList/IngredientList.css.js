import { StyleSheet } from 'react-native'

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
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15
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
		flexDirection: 'row',
		alignItems: 'center',
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
		flexDirection: 'column',
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 16,
		paddingBottom: 16
	},
	ingredients__title: {
		fontSize: 20,
		color: 'black'
	},
	ingredients__amount: {
		fontSize: 16,
		color: 'rgba(0,0,0,.6)',
		paddingTop: 6
	},

	closeButton: {
		position: 'absolute',
		top: 0,
		right: 0,
		padding: 10
	}
})
