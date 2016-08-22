'use strict'

import React, {PropTypes} from 'react'
import {NavigationExperimental, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import Home from '../Home'
import Recipe from '../Recipe'
import { navigatePop } from '../../actions/navigationActions'

const {
	CardStack: NavigationCardStack,
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental

// Known bug in v0.30: https://github.com/facebook/react-native/issues/7422#issuecomment-236280199
console.ignoredYellowBox = ['Warning: Failed prop type: Required prop `scene` was not specified in `NavigationHeader`']

class AppContainerWithCardStack extends React.Component {
	render () {
		let { navigationState, backAction } = this.props

		return (

			// Redux is handling the reduction of our state for us. We grab the navigationState
			// we have in our Redux store and pass it directly to the <NavigationCardStack />.
			<NavigationCardStack
				navigationState={navigationState}
				onNavigateBack={backAction}
				style={styles.container}
				direction={navigationState.routes[navigationState.index].key === 'Modal'
					? 'vertical' : 'horizontal'
				}
				renderOverlay={props => (
					<NavigationHeader
						{...props}
						onNavigateBack={backAction}
						renderTitleComponent={props => {
							const title = props.scene.route.title
							return <NavigationHeader.Title>{title}</NavigationHeader.Title>
						}}
						// When dealing with modals you may also want to override renderLeftComponent...
					/>
				)}
				renderScene={this._renderScene}
			/>
		)
	}

	_renderScene ({scene}) {
		const { route } = scene

		switch (route.key) {
		case 'Home':
			return <Home />
		case 'Recipe':
			return <Recipe />
		}
	}
}

AppContainerWithCardStack.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		}
	})
)(AppContainerWithCardStack)
