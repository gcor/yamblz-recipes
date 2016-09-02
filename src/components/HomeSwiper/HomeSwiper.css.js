import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	swiper: {
	},
	swiper__slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	swiper__image: {
		height: Dimensions.get('window').height * 0.8
	},
	swiper__dot: {
		backgroundColor: 'rgba(255,255,255,.6)',
		width: 10,
		height: 10,
		borderRadius: 7,
		marginLeft: 7,
		marginRight: 7
	},
	swiper__dot_active: {
		backgroundColor: '#FFF'
	},
	swiper__pagination: {
		bottom: 20
	},
	swiper__background: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		paddingTop: 50,
		paddingLeft: 20,
		backgroundColor: 'rgba(0,0,0,.1)'
	},
	swiper__title: {
		fontSize: ui.fontXL,
		fontWeight: 'bold',
		color: 'white'
	},
	swiper__info: {
		marginTop: 20,
		flexDirection: 'row'
	},
	swiper__time: {
		fontSize: ui.fontL,
		fontWeight: '100',
		color: 'white'
	},
	swiper__energy: {
		marginLeft: 5,
		fontSize: ui.fontL,
		fontWeight: '100',
		color: 'white'
	}
})
