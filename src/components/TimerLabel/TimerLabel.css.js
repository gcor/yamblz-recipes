import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
export default StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
		flexDirection: 'row',
		padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	timeout: {
		color: 'black',
		fontSize: 16
	},
	actionLabel: {
		color: 'black',
		width: width * 0.6,
		fontSize: 16
	},
	icon: {
		height: 30,
		width: 30,
		resizeMode: 'contain'
	},
	timeline: {
		borderTopWidth: 4,
		borderTopColor: '#D8D8D8'
	}
})
