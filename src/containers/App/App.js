import React, { Component, PropTypes } from 'react'
import { NavigationExperimental, BackAndroid, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import router from '../../router'
import { navigatePop } from '../../actions/navigationActions'
import css from './App.css'

const {
	CardStack: NavigationCardStack,
	Header: NavigationHeader
} = NavigationExperimental

class App extends Component {
	constructor () {
		super()
		this.backHandler = this.backHandler.bind(this)
	}
	backHandler () {
		let { navigationState, backAction } = this.props
		if (navigationState.index === 0) {
			return false
		}

		backAction()
		return true
	}

	componentWillMount () {
		BackAndroid.addEventListener('hardwareBackPress', this.backHandler)
	}

	componentWillUnmount () {
		BackAndroid.removeEventListener('hardwareBackPress', this.backHandler)
	}

	renderOverlay (props) {
		let { navigationState, backAction } = this.props

		switch (navigationState.routes[navigationState.routes.length - 1].key) {
			case 'Home':
			case 'RecipeView':
			case 'Recipe':
			case 'Search': return null
		}

		return (
			<NavigationHeader {...props}
				style={css.header}
				onNavigateBack={backAction}
				renderTitleComponent={props => {
					const title = props.scene.route.title
					return (
						<NavigationHeader.Title
							textStyle={css.text__header}>
							{title.toUpperCase()}
						</NavigationHeader.Title>
					)
				}} />
		)
	}

	setStatusBar (key) {
		switch (key) {
			case 'Home': StatusBar.setBackgroundColor('transparent', false)
				return 0
			case 'RecipeView': StatusBar.setBackgroundColor('transparent', false)
				return 0
			default: StatusBar.setBackgroundColor('black', false)
				return 24
		}
	}

	render () {
		let { navigationState, backAction } = this.props
		StatusBar.setTranslucent(true)

		return (
			<NavigationCardStack
				navigationState={navigationState}
				onNavigateBack={backAction}
				style={{flex: 1, paddingTop: this.setStatusBar(navigationState.routes[navigationState.routes.length - 1].key)}}
				direction={navigationState.routes[navigationState.index].key === 'Recipe'
					? 'vertical' : 'horizontal'
				}
				renderOverlay={this.renderOverlay.bind(this)}
				renderScene={router} />
		)
	}
}

App.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired
}

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		}
	})
)(App)
