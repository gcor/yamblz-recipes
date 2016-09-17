import { AppRegistry } from 'react-native'
import App from './src/app'
try {
	AppRegistry.registerComponent('kitchen', () => App)
} catch (err) {
	console.info('Приложение, между прочим, упало!')
}
