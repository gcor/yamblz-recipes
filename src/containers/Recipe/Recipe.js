import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View
} from 'react-native'

import Recipe from '../../components/Recipe'
import AbsoluteTimer from '../../components/AbsoluteTimer'
import { SensorManager } from 'NativeModules'
import { throttle } from 'lodash'
import RecipeAppBar from '../../components/RecipeAppBar'
import BlackLayoutWithPreloader from '../../components/BlackLayoutWithPreloader'

class RecipePage extends Component {
	constructor (props) {
		super(props)
		this.proximityHandler = this.proximityHandler.bind(this)
	}
	componentWillMount () {
		DeviceEventEmitter.removeAllListeners('Proximity')
		this.setState({
			ready: false, scroll: 0,
			currentSlide: 4,
			isLayoutVisible: false,
			isDelayed: false
		})
		InteractionManager.runAfterInteractions(() => {
			this.setState({ready: true})
			this.props.fetchRecipes('57dc0628f36d2873d81b0c93')
		})
		SensorManager.startProximity(50)
	}

	componentWillReceiveProps (props) {
		console.log(props)
		// console.log(props.scroll, props.currentSlide)
		const { scroll, currentHeight } = props
		if (scroll) {
			this.scrollTo(currentHeight)
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
		const { isDelayed } = this.state
		if (isNear) {
			this.waitingTimeout = setTimeout(() => {
				this.setState({isLayoutVisible: true})
			}, 800)
			this.sliderTimeout = setTimeout(() => {
				this.props.previousSlide()
				this.setState({
					isDelayed: true,
					isLayoutVisible: false
				})
			}, 2500)
		}

		if (!isNear) {
			clearTimeout(this.sliderTimeout)
			clearTimeout(this.waitingTimeout)
			this.sliderTimeout = null
			this.waitingTimeout = null
			this.setState({isLayoutVisible: false})
			if (isDelayed) {
				this.setState({isDelayed: false})
				return false
			}
			this.props.nextSlide()
			// this.scrollTo()
		}
	}

	componentWillUnmount () {
		SensorManager.stopProximity()
		this.proximityListener.remove()
		this.props.resetSlider()
		this.props.resetTimers()
	}

	scrollTo (currentHeight) {
		if (!currentHeight) currentHeight = this.props.currentHeight
		console.log('scrolling to' + currentHeight)
		this.recipe.scrollTo({
			y: currentHeight,
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

	renderBlackLayout () {
		if (this.state.isLayoutVisible) {
			return (
				<BlackLayoutWithPreloader />
			)
		}

		return null
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
				{this.renderBlackLayout()}
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
