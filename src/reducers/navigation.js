import { cardStackReducer } from 'react-native-navigation-redux-helpers'

const initialState = {
	key: 'global',
	index: 0,
	routes: [
		{
			key: 'applicationTabs',
			index: 0
		},
		{
			key: 'recipes',
			index: 1
		}
	]
}

module.exports = cardStackReducer(initialState)
