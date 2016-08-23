import React, { PropTypes } from 'react'
import { NavigationExperimental, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Home from '../Home'
import Recipe from '../Recipe'
import { navigatePop } from '../../actions/navigationActions'
import s from './App.css'

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
				style={styles.container}
				direction={navigationState.routes[navigationState.index].key === 'Modal'
					? 'vertical' : 'horizontal'
				}
				renderOverlay={props => (
					<NavigationHeader {...props}
						style={s.header}
						onNavigateBack={backAction}
						renderTitleComponent={props => {
							const title = props.scene.route.title
							console.log(NavigationHeader.Title)
							return (
								<NavigationHeader.Title
									title={11}
									textStyle={{fontSize: 17}}
									style={{fontSize: 32, color: 'blue'}}>
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