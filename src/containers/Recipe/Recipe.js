import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View
} from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'
import { SensorManager } from 'NativeModules'
import { throttle } from 'lodash'

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
		this.props.resetSlider()
		// SensorManager.stopLightSensor()
	}

	scrollTo () {
		this.setState({scroll: this.props.currentHeight})
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

	handleScroll = e => {
		const { slides, currentSlide } = this.props
		console.log(currentSlide, slides.length)
		if (currentSlide >= slides.length - 1) {
			return false
		}
		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		const screenHeightDiv2 = e.nativeEvent.layoutMeasurement.height / 2
		const currentScreenOffset = currentY + screenHeightDiv2
		if (currentScreenOffset > slides[currentSlide + 1].offsetY) {
			this.props.nextSlide()
			console.log(currentSlide)
		}

		if (currentScreenOffset < slides[currentSlide].offsetY) {
			this.props.previousSlide()
			console.log(currentSlide)
		}
	}
	render () {
		const { recipe } = this.props
		return (
			<ScrollView
				onScroll={this.handleScroll}
				scrollEventThrottle={200}
				ref={(r) => { this.recipe = r }}>
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
	resetSlider: PropTypes.func.isRequired,
	currentHeight: PropTypes.number.isRequired
}

export default RecipePage
