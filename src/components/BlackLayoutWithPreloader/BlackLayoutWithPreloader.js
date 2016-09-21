import React, { Component, PropTypes } from 'react'
import { Animated, View, ProgressBarAndroid, Text } from 'react-native'
import s from '../../constants/css'
import css from './BlackLayoutWithPreloader.css'
import BookmarkSave from '../Icons/BookmarkSave'

export default class BlackLayoutWithPreloader extends Component {
	constructor (props) {
		super(props)
		this.state = {
			backgroundColor: new Animated.Value(0),
			opacity: new Animated.Value(0),
			progress: 0,
			visible: false
		}
		this.tick = this.tick.bind(this)
		this.stopPreloader = this.stopPreloader.bind(this)
	}

	componentDidMount () {
		this.startPreloader()
	}

	startPreloader () {
		this.setState({progress: 0})

		this.animate(150)
		if (this.props.addToBookmarks) {
			setTimeout(() => {
				this.stopPreloader()
			}, 1500)
		} else {
			this.preloader = setInterval(this.tick, 0.25)
		}
	}

	animate (opacity) {
		Animated.parallel([
			Animated.timing(this.state.backgroundColor, {
				toValue: opacity,
				duration: 200
			}),
			Animated.timing(this.state.opacity, {
				toValue: opacity,
				duration: 100
			})
		]).start()
	}

	componentWillUnmount () {
		this.stopPreloader()
	}

	stopPreloader () {
		clearInterval(this.preloader)
		this.preloader = null
		if (!this.props.endless) {
			this.setState({
				progress: 0,
				visible: false
			})
			this.animate(0)
		}
	}

	tick () {
		this.setState({
			progress: (this.state.progress + 0.02)
		})
		if (this.props.addToBookmarks) {
			return false
		}
		if (this.state.progress > 1) {
			this.stopPreloader()
		}
	}

	renderProgressBar () {
		if (!this.props.progressBar) return null
		return (
			<View style={css.preloader}>
				<View style={css.textHolder}>
					<Text style={css.preloaderText}>к предыдущему шагу</Text>
				</View>
				<ProgressBarAndroid
					style={{width: 200}}
					progress={this.state.progress}
					indeterminate={false}
					styleAttr='Horizontal'
					color={s.yellow}
				/>
			</View>
		)
	}

	renderAddToBookmarks () {
		if (!this.props.addToBookmarks) return null
		return (
			<Animated.View style={[css.icon, {opacity: this.state.opacity}]}>
				<BookmarkSave />
				<Text style={css.text}>Сохранено в ваших рецептах</Text>
			</Animated.View>
		)
	}

	renderVoiceHelper () {
		if (!this.props.voiceHelper) return null
		return (
			<Animated.View>
				<Text>Hello world</Text>
			</Animated.View>
		)
	}

	render () {
		let backgroundColor = this.state.backgroundColor.interpolate({
			inputRange: [0, 150],
			outputRange: ['rgba(0, 0, 0, 0)', ['rgba(0, 0, 0, .78)']]
		})
		return (
			<Animated.View
				style={[css.container, {backgroundColor: backgroundColor}]}>
				{this.renderProgressBar()}
				{this.renderAddToBookmarks()}
			</Animated.View>
		)
	}
}

BlackLayoutWithPreloader.propTypes = {
	visible: PropTypes.bool,
	progressBar: PropTypes.bool,
	addToBookmarks: PropTypes.bool,
	voiceHelper: PropTypes.bool,
	endless: PropTypes.bool
}
