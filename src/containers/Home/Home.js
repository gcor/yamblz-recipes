import React, { Component, PropTypes } from 'react'
import { View, NativeModules, ScrollView, StatusBar } from 'react-native'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import css from './Home.css'
import * as _ from 'lodash'
import HomeSwiper from '../../components/HomeSwiper'
import Slider from '../../components/Slider'
import AppBar from '../../components/AppBar'
import SoonInApp from '../../components/SoonInApp'
import Preloader from '../../components/Preloader'

const AppMetrica = NativeModules.AppMetrika

export default class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {modalVisible: false}
		this.props.fetchJumbotron()
		this.props.fetchRecommend()
		this._handleScroll = this._handleScroll.bind(this)
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
		if (!e) return null
		if (!e.nativeEvent) return null
		if (!e.nativeEvent.contentOffset) return null
		if (!e.nativeEvent.contentOffset.y) return null

		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		var color = currentY + 24 > this.swiperHeight ? 'black' : 'transparent'
		StatusBar.setBackgroundColor(color, false)
	}

	renderHome () {
		const titles = {
			recommend: 'рекомендуем'.toUpperCase(),
			soon: 'скоро в приложении'.toUpperCase()
		}
		const { jumbotron, recommend } = this.props
		const { status } = this.props
		switch (status) {
			case LOADING: return (
				<Preloader margin={200} />
			)
			case SUCCESS: return (
				<ScrollView style={css.home}
					onMomentumScrollEnd={this._handleScroll}
					onScrollEndDrag={this._handleScroll}>
					<View
						onLayout={this._getHeight.bind(this)}>
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
			)
			case ERROR: return 'Сломалось или нет Интернета'
		}
	}

	render () {
		return (
			<View style={{flex: 1}}>
				{this.renderHome()}
			</View>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	jumbotron: PropTypes.array.isRequired,
	recommend: PropTypes.array.isRequired,
	status: PropTypes.string.isRequired,
	fetchJumbotron: PropTypes.func.isRequired,
	fetchRecommend: PropTypes.func.isRequired
}
