import React, { Component, PropTypes } from 'react'
import { Animated, View, ProgressBarAndroid } from 'react-native'
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

	stopPreloader () {
		clearInterval(this.preloader)
		this.preloader = null
		this.setState({
			progress: 0,
			visible: false
		})
	}

	tick () {
		this.setState({
			progress: (this.state.progress + 0.012)
		})
		if (this.state.progress > 1) {
			this.animate(0)
			this.stopPreloader()
		}
	}

	render () {
		const { progress, opacity } = this.state
		return (
			<Animated.View
				style={[css.container, {opacity: opacity}]}>
				<View style={css.preloader}>
					<ProgressBarAndroid
						style={{width: 200}}
						progress={progress}
						indeterminate={false}
						styleAttr='Horizontal'
						color={s.yellow}
					/>
				</View>
			</Animated.View>
		)
	}
}

BlackLayoutWithPreloader.propTypes = {
	visible: PropTypes.bool.isRequired
}
