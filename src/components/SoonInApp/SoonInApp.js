import React, { Component, PropTypes } from 'react'
import { View, Text, Alert, NativeModules } from 'react-native'
import css from './SoonInApp.css'
import CardSmall from '../CardSmall'
import Button from '../Button'
import SoonModal from '../SoonModal'

const AppMetrica = NativeModules.AppMetrika

export default class SoonInApp extends Component {
	constructor () {
		super()
		this.state = {
			isVisible: false
		}
		this.toggleSoonModal = this.toggleSoonModal.bind(this)
	}

	toggleSoonModal () {
		AppMetrica.categorySubscribe(JSON.stringify({
			title: 'Следующая категория'
		}))
		this.setState({isVisible: !this.state.isVisible})
	}

	render () {
		return (
			<View>
				<View style={{marginBottom: 16}}>
					<Text style={{fontSize: 16, color: 'rgba(0,0,0,.56)', marginLeft: 24, marginBottom: 16, marginTop: 24}}>
						СКОРО В ПРИЛОЖЕНИИ
					</Text>
					<View style={{margin: 8}}>
						<CardSmall title={'Овощи'} amount={20} image={'http://fitnesslair.ru/wp-content/uploads/2016/06/sovmestimost-produktov-pitaniya2.jpg'} />
						<Text style={{fontSize: 16, color: 'black', marginLeft: 16, marginBottom: 4, marginTop: 24, marginRight: 16, textAlign: 'center'}}>
							Категория появится через 7 дней.
						</Text>
						<Text style={{fontSize: 16, color: 'black', marginLeft: 16, marginBottom: 24, marginTop: 4, marginRight: 16, textAlign: 'center'}}>
							Отправить оповещение?
						</Text>
						<View style={{marginLeft: 16, marginRight: 16, marginBottom: 16}} >
							<Button text='НАПОМНИТЬ'
								onPress={this.toggleSoonModal} />
						</View>
					</View>
				</View>
				<SoonModal
					toggleModal={this.toggleSoonModal}
					visible={this.state.isVisible}
					/>
			</View>
		)
	}
}
