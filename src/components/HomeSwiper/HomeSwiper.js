import React, { Component, PropTypes } from 'react'
import { Text, View, Image } from 'react-native'
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
			<Swiper style={css.swiper} height={540} horizontal autoplay={false}
				dot={<View style={{backgroundColor: 'rgba(255,255,255,.6)', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
				activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
				paginationStyle={{
					bottom: 20
				}}>
				{items.map((item, key) => {
					return (
						<View style={css.swiper__slide}>
							<Image source={{uri: item.image}} style={css.swiper__image} />
							<LinearGradient colors={['rgba(0,0,0,.36)', 'transparent']} style={css.swiper__background}>
								<Text style={css.swiper__title}>{item.title}</Text>
								<View style={css.swiper__info}>
									<Text style={css.swiper__time}>{this.getCookingTime(item.time)}{' '}·{' '}</Text>
									<Text style={css.swiper__energy}>{item.energy} ккал</Text>
								</View>
							</LinearGradient>
						</View>
					)
				})}
			</Swiper>
		)
	}
}

HomeSwiper.propTypes = {
	items: PropTypes.array.isRequried
}
