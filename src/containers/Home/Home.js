import React, { Component, PropTypes } from 'react'
import { Text, View, NativeModules, ScrollView, StatusBar, Modal, TouchableHighlight } from 'react-native'
import Button from '../../components/Button'
import css from './Home.css'
import * as _ from 'lodash'
import HomeSwiper from '../../components/HomeSwiper'
import Slider from '../../components/Slider'
import CardSmall from '../../components/CardSmall'
import AppBar from '../../components/AppBar'

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

	setPushNotification () {
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
			AppMetrica.openRecipe(JSON.stringify({
				from: 'HomeSwiper',
				title: addFromSwiperRecipe.title,
				id: recipeID
			}))
		}
		if (addFromRecommendRecipe) {
			AppMetrica.openRecipe(JSON.stringify({
				from: 'HomeRecommend',
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

	renderAppBar () {
		return (
			<AppBar />
		)
	}

	renderModal () {
		return (
			<Modal animationType={'slide'} transparent={true} visible={this.state.modalVisible}
				onRequestClose={() => {this.setModalVisible(false)}}>
				<View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
					<View style={{width: 280, height: 212, borderWidth: 0, borderStyle: 'solid', borderColor: 'transparent', backgroundColor: 'white', borderRadius: 3}}>
						<Text style={{fontSize: 20, margin: 24, color: 'black', textAlign: 'center'}}>Хотите узнавать о новых рецептах?</Text>
						<Text style={{fontSize: 16, marginLeft: 24, marginRight: 24, marginBottom: 24, color: 'black', textAlign: 'center'}}>Разрешите отпралять вам уведомления.</Text>
						<View style={{flexDirection: 'row', justifyContent: 'center'}}>
							<TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
								<Text style={{fontSize: 16, color: 'rgba(0,0,0,0.5)'}}>НЕТ</Text>
							</TouchableHighlight>
							<TouchableHighlight style={{marginLeft: 32}} onPress={() => { this.setPushNotification() }}>
								<Text style={{fontSize: 16, color: 'black'}}>ДА, СПАСИБО</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</Modal>
		)
	}

	renderSoonInApp () {
		return (
			<View style={{marginBottom: 16}}>
				<Text style={{fontSize: 16, color: 'rgba(0,0,0,.56)', marginLeft: 24, marginBottom: 16, marginTop: 24}}>
					СКОРО В ПРИЛОЖЕНИИ
				</Text>
				<View style={css.home__notificationCard}>
					<CardSmall title={'Овощи'} amount={20} image={'http://fitnesslair.ru/wp-content/uploads/2016/06/sovmestimost-produktov-pitaniya2.jpg'} />
					<Text style={{fontSize: 16, color: 'black', marginLeft: 16, marginBottom: 4, marginTop: 24, marginRight: 16, textAlign: 'center'}}>
						Категория появится через 7 дней.
					</Text>
					<Text style={{fontSize: 16, color: 'black', marginLeft: 16, marginBottom: 24, marginTop: 4, marginRight: 16, textAlign: 'center'}}>
						Отправить оповещение?
					</Text>
					<View style={{marginLeft: 16, marginRight: 16, marginBottom: 16}} >
						<Button text='НАПОМНИТЬ'
							onPress={this.setModalVisible.bind(this, true)} />
					</View>
				</View>
			</View>
		)
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
						{this.renderAppBar()}
					</View>
					<Slider style={css.home__recomended}
						title={titles.recommend}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={recommend} />
					{this.renderSoonInApp()}
					{this.renderModal()}
					<Button onPress={this._onPushToTimers.bind(this)} text='Перейти к таймерам' />
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
