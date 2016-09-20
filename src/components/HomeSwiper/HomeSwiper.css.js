import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
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
		borderRadius: 8,
		marginLeft: 4,
		marginRight: 4
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
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	swiper__top: {
		height: 330,
		paddingTop: 112,
		paddingLeft: 28
	},
	swiper__bottom: {
		height: 65
	},
	swiper__title: {
		fontSize: 26,
		fontWeight: '100',
		color: 'white',
		marginRight: 28
	},
	swiper__info: {
		marginTop: 8,
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
