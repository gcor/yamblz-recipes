import { StyleSheet, Dimensions } from 'react-native'
// import ui from '../../constants/css'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
	bar__hilight: {
		padding: 8
	},
	bar__icon: {
		height: 24,
		width: 24,
		resizeMode: 'contain',
		margin: 4
	},
	playpause: {
		padding: 16
	},
	playpause__icon: {
		height: 22,
		width: 22,
		resizeMode: 'contain'
	},
	remove: {
		padding: 16
	},
	remove__icon: {
		height: 22,
		width: 22,
		resizeMode: 'contain'
	},
	bookmark__save: {
		marginLeft: width * 0.5 -20,
		paddingBottom: 16
	},
	bookmark__save_icon: {
		width: 40,
		height: 40,
		resizeMode: 'contain'
	}
})
