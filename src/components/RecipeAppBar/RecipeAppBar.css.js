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
	}
})
