import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		position: 'absolute',
		top: 0,
		left: 0,
		width: width,
		height: height
	},
	preloader: {
		marginTop: height * 0.5,
		marginLeft: width * 0.5 - 100,
	}
})
