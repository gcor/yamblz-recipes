import { StyleSheet } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	bar: {
		paddingLeft: 16,
		paddingRight: 16,
		height: 70,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bar_shift: {
		marginTop: 32
	},
	bar_absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	bar_white: {
		backgroundColor: 'white',
		elevation: 3
	},
	bar_centered: {
		alignItems: 'center'
	},
	bar__hilight: {
			padding: 8
	},
	bar__icon: {
			height: 24,
			width: 24,
			resizeMode: 'contain'
	},
	bar__category: {
		paddingLeft: 16,
		paddingRight: 16,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: 'white',
		borderRadius: 18,
		backgroundColor: 'rgba(0,0,0,0.2)'
	},
	bar__content: {
			flex: 1,
			paddingLeft: 8,
			paddingRight: 8
	},
	bar__title: {
			fontSize: 20,
			fontWeight: '100',
			color: 'white',
			flexWrap: 'wrap'
	},
	bar__title_black: {
			color: 'black'
	},
	bar__info: {
			marginTop: 8,
			flexDirection: 'row'
	},
	bar__time: {
			fontSize: 16,
			fontWeight: '100',
			color: 'white'
	},
	bar__energy: {
			marginLeft: 5,
			fontSize: 16,
			fontWeight: '100',
			color: 'white'
	}
})
