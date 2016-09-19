import React, { Component, PropTypes } from 'react'
import { ScrollView,
	InteractionManager,
	DeviceEventEmitter,
	View,
	Text,
	Vibration,
	ToastAndroid
} from 'react-native'

import Recipe from '../../components/Recipe'
import AbsoluteTimer from '../../components/AbsoluteTimer'
import { SensorManager } from 'NativeModules'
import { throttle } from 'lodash'
import RecipeAppBar from '../../components/RecipeAppBar'
import BlackLayoutWithPreloader from '../../components/BlackLayoutWithPreloader'
import css from './Recipe.css'

class RecipePage extends Component {
	constructor (props) {
		super(props)
		this.proximityHandler = this.proximityHandler.bind(this)
		this.vibrationHandler = this.vibrationHandler.bind(this)
		this.toggleBlackLayout = this.toggleBlackLayout.bind(this)
		this.proximityListener = null
	}
	componentWillMount () {
		this.setState({
			ready: false, scroll: 0,
			currentSlide: 4,
			isLayoutVisible: false,
			isLayoutForTimers: false,
			isDelayed: false
		})
		InteractionManager.runAfterInteractions(() => {
			this.setState({ready: true})
		})
	}

	componentWillReceiveProps (props) {
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
		SensorManager.startProximity(30)
		DeviceEventEmitter.addListener('Proximity', this.proximityHandler)

		setTimeout(() => {
			ToastAndroid.showWithGravity(
				'Чтобы попробовать бесконтактные жесты, ' +
				'проведи рукой над верхней частью экрана', ToastAndroid.LONG,
				ToastAndroid.BOTTOM,
			)
		}, 5000)
	}

	vibrationHandler () {
		Vibration.vibrate([0, 100])
	}

	toggleBlackLayout (isLayoutForTimers) {
		this.setState({
			isLayoutVisible: !this.state.isLayoutVisible
		})
		if (isLayoutForTimers) {
			this.setState({isLayoutForTimers: !this.state.isLayoutForTimers})
		}
	}

	proximityHandler (data) {
		const { isNear } = data
		console.log(isNear)
		const { isDelayed } = this.state
		if (isNear) {
			this.waitingTimeout = setTimeout(this.toggleBlackLayout, 500)
			this.sliderTimeout = setTimeout(() => {
				this.vibrationHandler()
				this.props.previousSlide()
				this.setState({isDelayed: true})
				this.toggleBlackLayout()
			}, 1500)
		}
		/*

		*/
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
			this.vibrationHandler()
		}
	}

	componentWillUnmount () {
		DeviceEventEmitter.removeListener('Proximity', this.proximityHandler)
		SensorManager.stopProximity()

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
				<BlackLayoutWithPreloader
					hideProgressBar={this.state.isLayoutForTimers}
					endless={this.state.isLayoutForTimers}
				/>
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
						<View style={css.bonappetite}>
							<Text style={css.bonappetite__text}>Приятного аппетита</Text>
						</View>
					</ScrollView>
				</View>
				<AbsoluteTimer
					toggleBlackLayout={this.toggleBlackLayout}
				/>
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
