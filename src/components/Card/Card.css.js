import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	card: {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: 'transparent',
		backgroundColor: 'white',
		borderRadius: 3,
		elevation: 4,
		marginBottom: 20,
		marginLeft: 8,
		marginRight: 8
	},
	card_type_slider: {
		width: Dimensions.get('window').width * 0.9
	},
	card__image: {
		height: 312,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3
	},
	card__image_type_slider: {
		height: 250
	},
	card__stars: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		flex: 1,
		margin: 10
	},
	card__star: {
		width: 16,
		height: 16,
		backgroundColor: 'silver',
		margin: 10
	},
	card__star_active: {
		backgroundColor: 'gold'
	},
	card__title: {
		fontSize: ui.fontL,
		fontWeight: '500',
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 24,
		color: '#333'
	},
	card__description: {
		marginLeft: 15,
		marginRight: 15,
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 24
	},
	card__text: {
		fontSize: ui.fontS,
		marginTop: 4,
		color: '#333'
	},
	card__point: {
		marginLeft: 10,
		marginRight: 10
	},
	card__text_right: {
		textAlign: 'right'
	},
	card__side: {
		flexDirection: 'row'
	},
	card__divider: {
		marginLeft: 8,
		marginRight: 8,
		marginTop: -2,
		fontSize: 20
	}
})
