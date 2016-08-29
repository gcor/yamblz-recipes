import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View
} from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'
import { SensorManager } from 'NativeModules'

class RecipePage extends Component {
	componentWillMount () {
		this.setState({ready: false, scroll: 0})
		InteractionManager.runAfterInteractions(() => {
			this.setState({ready: true})
		})
	}

	componentDidMount () {
		SensorManager.startProximity(100)
		// SensorManager.startLightSensor(100)
		const self = this
		DeviceEventEmitter.addListener('Proximity', data => {
			const { isNear } = data
			if (isNear) {
				this.props.nextSlide()
				self.scrollTo()
			}
		})
		// DeviceEventEmitter.addListener('LightSensor', data => {
		// 	const { light } = data
		// 	console.log(light)
		// })
	}

	componentWillUnmount () {
		SensorManager.stopProximity()
		// SensorManager.stopLightSensor()
	}

	scrollTo () {
		this.setState({scroll: this.state.scroll + 400})
		this.recipe.scrollTo({
			y: this.state.scroll,
			animated: true
		})
		console.log('adsdasads', this.props.currentHeight)
	}

	renderRecipe (recipe) {
		if (!this.state.ready) return null
		return (
			<View>
				<Button text='Процесс' route='home' />
				<Recipe data={recipe} />
			</View>
		)
	}
	render () {
		const { recipe } = this.props
		return (
			<ScrollView ref={(r) => { this.recipe = r }}>
				{this.renderRecipe(recipe)}
			</ScrollView>
		)
	}
}

RecipePage.propTypes = {
	fetchRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
	nextSlide: PropTypes.func.isRequired,
	previousSlide: PropTypes.func.isRequired,
	handleSwipe: PropTypes.func.isRequired,
	currentHeight: PropTypes.number.isRequired
}

export default RecipePage
