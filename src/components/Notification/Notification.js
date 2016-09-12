import Push from 'react-native-push-notification'

class Notification {
	constructor () {
		this.delay = 0
		this.timeout = null
		this.message = ''
	}

	pushWithDelay (message, delay) {
		if (delay) this.delay = delay
		let self = this
		this.timeout = setTimeout(() => {
			self.push(message)
		}, this.delay)
	}

	cancelPushWithDelay () {
		clearInterval(this.timeout)
		this.timeout = undefined
	}

	syncPushWithDelay (newDelay) {
		this.cancelPushWithDelay()
		this.delay = newDelay
		this.pushWithDelay()
	}

	push (message, delay) {
		if (!delay) delay = 0
		if (!message) message = 'Мы забыли написать текст к уведомлению'
		Push.localNotificationSchedule({
			message: message,
			date: new Date(Date.now() + delay)
		})
	}
}

let notification = new Notification()
export default notification
