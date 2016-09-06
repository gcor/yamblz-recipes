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

	componentWillMount () {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			let { navigationState, backAction } = this.props
			// Detect if is on main screen
			if (navigationState.index === 0) {
				return false
			}

			backAction()
			return true
		})
	}

	renderOverlay (props) {
		let { navigationState, backAction } = this.props
		if (navigationState.index === 0) return null
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

	setStatusBarProps (isTranslucent, color) {
		StatusBar.setTranslucent(isTranslucent)
		StatusBar.setBackgroundColor(color, false)
	}

	setStatusBar (index) {
		switch (index) {
			case 0: this.setStatusBarProps(true, 'transparent')
				break
			case 1: this.setStatusBarProps(true, 'transparent')
				break
			default: this.setStatusBarProps(false, 'black')
		}
	}

	render () {
		let { navigationState, backAction } = this.props
		this.setStatusBar(navigationState.index)
		
		return (
			<NavigationCardStack
				navigationState={navigationState}
				onNavigateBack={backAction}
				style={css.container}
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
