import React, { Component } from 'react'
import { View } from 'react-native'
import Push from 'react-native-push-notification'

export default class Notification extends Component {
	componentWillMount () {
		// Push.localNotificationSchedule({
		// 	message: 'Большой Брат следит за тобой!',
		// 	date: new Date(Date.now() + (20 * 1000))
		// })
	}
	render () {
		return <View />
	}
}
