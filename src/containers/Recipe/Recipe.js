import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View,
	NativeModules
} from 'react-native'

import Recipe from '../../components/Recipe'
import Button from '../../components/Button'
import AbsoluteTimer from '../../components/AbsoluteTimer'
import { SensorManager } from 'NativeModules'
import { throttle } from 'lodash'
import RecipeAppBar from '../../components/RecipeAppBar'

class RecipePage extends Component {
	constructor (props) {
		super(props)
		this.proximityHandler = this.proximityHandler.bind(this)
	}
	componentWillMount () {
		DeviceEventEmitter.removeAllListeners('Proximity')
		this.setState({
			ready: false, scroll: 0,
			currentSlide: 4
		})
		InteractionManager.runAfterInteractions(() => {
			this.setState({ready: true})
		})
		SensorManager.startProximity(50)
	}

	componentWillReceiveProps (props) {
		console.log(props.scroll, props.currentSlide)
		if (
			props.scroll) {
			// this.scrollTo()
		}
		if (this.state.currentSlide !== props.currentSlide) {
			this.setState({
				currentSlide: props.currentSlide
			})
		}
	}

	componentDidMount () {
		this.proximityListener = DeviceEventEmitter.addListener('Proximity',
			throttle(this.proximityHandler, 800))
	}

	proximityHandler (data) {
		const { isNear } = data
		if (isNear) {
			this.props.nextSlide()
			this.scrollTo()
		}
	}

	componentWillUnmount () {
		SensorManager.stopProximity()
		this.proximityListener.remove()
		this.props.resetSlider()
		this.props.resetTimers()
	}

	scrollTo () {
		this.recipe.scrollTo({
			y: this.props.currentHeight,
			animated: true
		})
	}

	renderRecipe (recipe) {
		if (!this.state.ready) return null
		return (
			<View>
				<Recipe data={recipe} />
			</View>
		)
	}

	handleScroll = e => {
		const { slides, currentSlide } = this.props
		if (currentSlide >= slides.length - 1) {
			this.props.previousSlide({scroll: false})
			return false
		}
		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		const screenHeightDiv2 = e.nativeEvent.layoutMeasurement.height / 2
		const currentScreenOffset = currentY + screenHeightDiv2
		if (currentScreenOffset > slides[currentSlide + 1].offsetY) {
			if (currentSlide >= slides.length - 2) {
				return false
			}
			this.props.nextSlide({scroll: false})
		}

		if (currentScreenOffset < slides[currentSlide].offsetY) {
			this.props.previousSlide({scroll: false})
		}
	}
	render () {
		const { recipe } = this.props
		return (
			<View style={{flex: 1, justifyContent: 'space-between'}}>
				<RecipeAppBar />
				<View style={{flex: 1}}>
					<ScrollView
						onScroll={this.handleScroll}
						scrollEventThrottle={200}
						ref={(r) => { this.recipe = r }}>
						{this.renderRecipe(recipe)}
					</ScrollView>
				</View>
				<AbsoluteTimer />
			</View>
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
	currentHeight: PropTypes.number.isRequired,
	slides: PropTypes.array.isRequired,
	currentSlide: PropTypes.number.isRequired,
	resetTimers: PropTypes.func.isRequired,
	scroll: PropTypes.bool.isRequired
}

export default RecipePage
