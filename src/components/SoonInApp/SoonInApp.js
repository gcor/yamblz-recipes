import React, { Component } from 'react'
import { View, Text, NativeModules, AsyncStorage } from 'react-native'
import css from './SoonInApp.css'
import CardSmall from '../CardSmall'
import Button from '../Button'
import { SOON_IN_APP_STATUS_KEY } from '../../constants/keys'
const AppMetrica = NativeModules.AppMetrika

export default class SoonInApp extends Component {
	componentWillMount () {
		this.setState({isSubscribe: false})
		const statusFromStorage = AsyncStorage.getItem(SOON_IN_APP_STATUS_KEY)
		statusFromStorage.then(r => {
			const json = JSON.parse(r)
			const status = !!json ? json.isSubscribe : false
			this.setState({isSubscribe: status})
		})
	}
	toggleSoonModal () {
		AppMetrica.categorySubscribe(JSON.stringify({
			title: 'Следующая категория'
		}))
		const status = {isSubscribe: true}
		AsyncStorage.setItem(SOON_IN_APP_STATUS_KEY, JSON.stringify(status))
		this.setState(status)
	}
	_renderSoonInAppButton () {
		const text = 'Напомним об открытии категории'
		if (this.state.isSubscribe) {
			return (
				<View style={css.soonbtn_disable}>
					<Text style={css.soonbtn__text}>{text.toUpperCase()}</Text>
				</View>
			)
		}
		return (
			<Button
				text='Напомнить'
				style={css.soon__btn}
				onPress={this.toggleSoonModal.bind(this)} />
		)
	}
	render () {
		return (
			<View>
				<View style={css.soon}>
					<Text style={css.soon__header}>СКОРО В ПРИЛОЖЕНИИ</Text>
					<View style={css.soon__wrap}>
						<CardSmall
							title={'Салаты'}
							amount={20}
							image={'http://fitnesslair.ru/wp-content/uploads/2016/06/sovmestimost-produktov-pitaniya2.jpg'}
						/>
						<View style={css.soon__description}>
							<Text style={css.soon__text}> Категория появится через 7 дней.</Text>
							<Text style={css.soon__text}> Отправить оповещение? </Text>
						</View>
						{this._renderSoonInAppButton.bind(this)()}
					</View>
				</View>
			</View>
		)
	}
}
