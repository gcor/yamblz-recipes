import React, { Component, PropTypes } from 'react'
import { Text, View, Image, TouchableHighlight, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'
import css from './HomeSwiper.css'

export default class HomeSwiper extends Component {
	getCookingTime (time) {
		if (time > 60) return ~~(time / 60) + ' час ' + (time % 60) + ' мин'
		else return time + ' мин'
	}
	render () {
		const { items } = this.props
		return (
			<Swiper
				style={css.swiper}
				height={Dimensions.get('window').height * 0.8}
				horizontal
				autoplay={false}
				dot={<View style={css.swiper__dot} />}
				activeDot={<View style={[css.swiper__dot, css.swiper__dot_active]} />}
				paginationStyle={css.swiper__pagination}>
				{items.map((item, key) => {
					return (
						<TouchableHighlight
							style={css.swiper__slide}
							key={key}
							>
							<View>
								<Image source={{uri: item.image}} style={css.swiper__image} />
								<LinearGradient colors={['rgba(0,0,0,.4)', 'transparent']} style={css.swiper__background}>
									<Text style={css.swiper__title}>{item.title}</Text>
									<View style={css.swiper__info}>
										<Text style={css.swiper__time}>
											{this.getCookingTime(item.time)} ·
										</Text>
										<Text style={css.swiper__energy}>{item.energy} ккал</Text>
									</View>
								</LinearGradient>
							</View>
						</TouchableHighlight>
					)
				})}
			</Swiper>
		)
	}
}

HomeSwiper.propTypes = {
	onPressHandler: PropTypes.func
}
