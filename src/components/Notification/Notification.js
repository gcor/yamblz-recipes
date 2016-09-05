// import React, { Component } from 'react'
// import { View } from 'react-native'
import Push from 'react-native-push-notification'

export const pushNotification = () => {
	Push.localNotificationSchedule({
		message: 'Большой Брат следит за тобой!',
		date: new Date(Date.now() + 5000)
	})
}
export default {
	pushNotification
}
