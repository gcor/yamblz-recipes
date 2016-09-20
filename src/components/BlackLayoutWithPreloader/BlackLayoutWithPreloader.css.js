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
		marginTop: height * 0.5 - 30,
		marginLeft: width * 0.5 - 100
	},
	icon: {
		marginTop: height * 0.43
	},
	text: {
		color: 'white',
		textAlign: 'center'
	},
	textHolder: {
		marginLeft: -80
	},
	preloaderText: {
		marginBottom: 20,
		textAlign: 'center',
		color: 'white'
	}
})
