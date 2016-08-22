import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	card: {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: 'transparent',
		backgroundColor: 'white',
		elevation: ui.elevation
	},
	card__preview: {
		backgroundColor: 'lightblue',
		height: 185
	},
	card__image: {

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
		marginLeft: 15,
		marginTop: 25
	},
	card__description: {
		marginLeft: 15,
		marginRight: 15,
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 25
	},
	card__text: {
		fontSize: ui.fontXS,
		marginTop: 8
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
