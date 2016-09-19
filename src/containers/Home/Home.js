import React, { Component, PropTypes } from 'react'
import { View, NativeModules, ScrollView, StatusBar } from 'react-native'
import css from './Home.css'
import * as _ from 'lodash'
import HomeSwiper from '../../components/HomeSwiper'
import Slider from '../../components/Slider'
import AppBar from '../../components/AppBar'
import SoonInApp from '../../components/SoonInApp'

const AppMetrica = NativeModules.AppMetrika

export default class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {modalVisible: false}
		this.props.fetchJumbotron()
		this.props.fetchRecommend()
	}

	setModalVisible (visible) {
		this.setState({modalVisible: visible})
	}

	_onPushToTimers () {
		this.props.navigatePush({
			key: 'Timers',
			title: 'Таймеры'
		})
	}

	_onCardPress (recipeID) {
		const { navigatePush, setCurrentRecipe, jumbotron, recommend } = this.props
		setCurrentRecipe(recipeID)
		const addFromSwiperRecipe = _.find(recommend, {'_id': recipeID})
		const addFromRecommendRecipe = _.find(jumbotron, {'_id': recipeID})
		if (addFromSwiperRecipe) {
			AppMetrica.openRecipeFromHomeSwiper(JSON.stringify({
				title: addFromSwiperRecipe.title,
				id: recipeID
			}))
		}
		if (addFromRecommendRecipe) {
			AppMetrica.openRecipeFromRecommend(JSON.stringify({
				title: addFromRecommendRecipe.title,
				id: recipeID
			}))
		}
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}

	_getHeight (e) {
		this.swiperHeight = e.nativeEvent.layout.height
	}

	_handleScroll (e) {
		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		var color = currentY + 24 > this.swiperHeight ? 'black' : 'transparent'
		StatusBar.setBackgroundColor(color, false)
	}

	render () {
		const titles = {
			recommend: 'рекомендуем'.toUpperCase(),
			soon: 'скоро в приложении'.toUpperCase()
		}
		const { jumbotron, recommend } = this.props
		return (
			<View style={{flex: 1}}>
				<ScrollView style={css.home}
					onScroll={this._handleScroll.bind(this)}
					scrollEventThrottle={200}>
					<View onLayout={this._getHeight.bind(this)}>
						<HomeSwiper
							onPressHandler={this._onCardPress.bind(this)}
							items={jumbotron} />
						<AppBar />
					</View>
					<Slider style={css.home__recomended}
						title={titles.recommend}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={recommend} />
					<SoonInApp />
				</ScrollView>
			</View>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	jumbotron: PropTypes.array.isRequired,
	recommend: PropTypes.array.isRequired,
	fetchJumbotron: PropTypes.func.isRequired,
	fetchRecommend: PropTypes.func.isRequired
}
