import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	swiper: {
	},
	swiper__slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	swiper__image: {
		height: 540
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
		fontSize: 30,
		fontWeight: '100',
		color: 'white'
	},
	swiper__info: {
		flexDirection: 'row'
	},
	swiper__time: {
		fontSize: 20,
		fontWeight: '100',
		color: 'white'
	},
	swiper__energy: {
		marginLeft: 50,
		fontSize: 20,
		fontWeight: '100',
		color: 'white'
	}
})
