import React, { PropTypes } from 'react'
import { View, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import Home from '../Home'
import Recipe from '../Recipe'
import RecipeView from '../RecipeView'
import { navigatePop } from '../../actions/navigationActions'
import css from './App.css'

const {
	CardStack: NavigationCardStack,
	Header: NavigationHeader
} = NavigationExperimental

// Known bug in v0.30: https://github.com/facebook/react-native/issues/7422#issuecomment-236280199
console.ignoredYellowBox = ['Warning: Failed prop type: Required prop `scene` was not specified in `NavigationHeader`']

class AppContainerWithCardStack extends React.Component {
	render () {
		let { navigationState, backAction } = this.props

		return (
			<NavigationCardStack
				navigationState={navigationState}
				onNavigateBack={backAction}
				style={css.container}
				direction={navigationState.routes[navigationState.index].key === 'Recipe'
					? 'vertical' : 'horizontal'
				}
				renderOverlay={props => (
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
						}}
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
			case 'RecipeView':
				return <RecipeView />
			case 'Recipe':
				return <Recipe />
		}
	}
}

AppContainerWithCardStack.propTypes = {
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
)(AppContainerWithCardStack)
