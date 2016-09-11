// import React, { Component } from 'react'
// import { View } from 'react-native'
import Push from 'react-native-push-notification'

export const pushNotification = (delay, message) => {
	if (!delay) delay = 0
	if (!message) message = 'Мы забыли написать текст к уведомлению'
	Push.localNotificationSchedule({
		message: message,
		date: new Date(Date.now() + delay)
	})
}

export default {
	pushNotification
}
