import React, { Component, PropTypes } from 'react'
import { Text, View, NativeModules, ScrollView, StatusBar, Modal, TouchableHighlight } from 'react-native'
import Button from '../../components/Button'
import css from './Home.css'
import HomeSwiper from '../../components/HomeSwiper'
import Slider from '../../components/Slider'
import CardSmall from '../../components/CardSmall'

export default class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {modalVisible: false}
	}

	setModalVisible (visible) {
		this.setState({modalVisible: visible})
	}

	setPushNotification () {
	}

	_onPushToCategory () {
		this.props.navigatePush({
			key: 'Category',
			title: 'Категория'
		})
	}

	_onPushToSearch () {
		this.props.navigatePush({
			key: 'Search',
			title: 'Поиск'
		})
	}

	_onPushToHistory () {
		this.props.navigatePush({
			key: 'History',
			title: 'Ваши рецепты'
		})
	}

	_onPushToTimers () {
		this.props.navigatePush({
			key: 'Timers',
			title: 'Таймеры'
		})
	}

	_onCustomJavaEvent () {
		const AppMetrica = NativeModules.AppMetrika
		// отправляем событие "Hello!!!" в метрику
		// настройки в android/app/src/main/java/com/kitchen/AppMetrikaPackage.java
		AppMetrica.hello()
	}

	_onCardPress (recipeID) {
		const { navigatePush, setCurrentRecipe } = this.props
		setCurrentRecipe(recipeID)
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
		var color = currentY > this.swiperHeight ? 'black' : 'transparent'
		StatusBar.setBackgroundColor(color, true)
	}

	renderAppBar () {
		return (
			<View style={{backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', marginLeft: 16, marginRight: 16, marginTop: 32, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, height: 60, flexDirection: 'row', justifyContent: 'space-between'}}>
				<TouchableHighlight onPress={this._onPushToHistory.bind(this)}>
					<View style={{height: 24, width: 24, backgroundColor: 'black'}}></View>
				</TouchableHighlight>
				<View style={{paddingLeft: 16, paddingRight: 16, height: 36, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderStyle: 'solid', borderColor: 'white', borderRadius: 18 }}>
					<Text style={{color: 'white', fontSize: 16 }}>Завтрак</Text>
				</View> 
				<TouchableHighlight style={{marginLeft: 32}} onPress={this._onPushToSearch.bind(this)}>
					<View style={{height: 24, width: 24, backgroundColor: 'black'}}></View>
				</TouchableHighlight>	
			</View>
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
					<CardSmall onCategoryPress={this._onPushToCategory.bind(this)} title={'Овощи'} amount={20} image={'http://fitnesslair.ru/wp-content/uploads/2016/06/sovmestimost-produktov-pitaniya2.jpg'} />
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
		var items = [{
			_id: '57bf5e6c23a24aae1483a36c',
			title: 'Брускетта с томатами и моцареллой',
			time: 20,
			energy: 254,
			complexity: 'Просто',
			category: 1,
			image: 'https://intense-earth-33481.herokuapp.com/assets/recipe2/brusketta_main.jpg',
			__v: 0,
			stages: [ ],
			ingredients: [ ],
			categories: [ ]
		}, {
			_id: '57bfe641a6bae0f91575a084',
			title: 'Курица меланезе со спагетти',
			time: 45,
			energy: 965,
			image: 'http://www.caffeconcerto.co.uk/images-menus/meat-chicken-milanese-with-spaghetti_tn-jpg_1466080216.jpg'
		}, {
			_id: '57c3f9e29a9071360856cedc',
			title: 'Запеченая паста 4 сыра',
			image: 'http://intense-earth-33481.herokuapp.com/assets/recipe11/4cheese.jpg',
			time: 40,
			energy: 824
		}]

		const titles = {
			recommend: 'рекомендуем'.toUpperCase(),
			soon: 'скоро в приложении'.toUpperCase()
		}

		return (
			<View style={{flex: 1}}>
				<ScrollView style={css.home}
					onScroll={this._handleScroll.bind(this)}>
					<View onLayout={this._getHeight.bind(this)}>
						<HomeSwiper
							onPressHandler={this._onCardPress.bind(this)}
							items={items} />
						{this.renderAppBar()}
					</View>
					<Slider style={css.home__recomended}
						title={titles.recommend}
						id={'1'}
						onPressHandler={this._onCardPress.bind(this)}
						recipes={items} />
					
					{this.renderSoonInApp()}
					{this.renderModal()}

					<Button onPress={this._onPushToCategory.bind(this)} text='Перейти в категорию' />
					<Button onPress={this._onPushToSearch.bind(this)} text='Перейти в поиск' />
					<Button onPress={this._onPushToHistory.bind(this)} text='Перейти в сохраненные' />
					<Button onPress={this._onPushToTimers.bind(this)} text='Перейти к таймерам' />
					<Button onPress={this._onCustomJavaEvent.bind(this)} text='Отправить событие в метрику' />
				</ScrollView>
			</View>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired
}
