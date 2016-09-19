import React, { Component, PropTypes } from 'react'
import { Animated, View, ProgressBarAndroid, Text } from 'react-native'
import s from '../../constants/css'
import css from './BlackLayoutWithPreloader.css'

export default class BlackLayoutWithPreloader extends Component {
	constructor (props) {
		super(props)
		this.state = {
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
		this.preloader = setInterval(this.tick, 0.25)
		this.animate(0.7)
	}

	animate (opacity) {
		Animated.timing(this.state.opacity, {
			toValue: opacity,
			duration: 200
		}).start()
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
			progress: (this.state.progress + 0.012)
		})
		if (this.state.progress > 1) {
			this.stopPreloader()
		}
	}

	renderProgressBar () {
		if (this.props.hideProgressBar) return null
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
			<View>
				<Text style={{color: 'white'}}>Added to bookmarks</Text>
			</View>
		)
	}

	render () {
		return (
			<Animated.View
				style={[css.container, {opacity: this.state.opacity}]}>
				{this.renderProgressBar()}
				{this.renderAddToBookmarks()}
			</Animated.View>
		)
	}
}

BlackLayoutWithPreloader.propTypes = {
	visible: PropTypes.bool.isRequired,
	hideProgressBar: PropTypes.bool.isRequired,
	addToBookmarks: PropTypes.bool.isRequired,
	endless: PropTypes.bool.isRequired
}
