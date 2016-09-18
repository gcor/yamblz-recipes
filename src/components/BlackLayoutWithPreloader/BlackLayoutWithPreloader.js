import React, { Component, PropTypes } from 'react'
import { Animated, View, ProgressBarAndroid } from 'react-native'
import s from '../../constants/css'
import css from './BlackLayoutWithPreloader.css'

export default class BlackLayoutWithPreloader extends Component {
	constructor (props) {
		super(props)
		this.state = {
			opacity: new Animated.Value(0),
			progress: 0
		}
		this.tick = this.tick.bind(this)
	}

	startPreloader () {
		this.setState({progress: 0})
		this.preloader = setInterval(this.tick, 0.25)
	}

	stopPreloader () {
		clearInterval(this.preloader)
		this.preloader = null
	}

	tick () {
		this.setState({
			progress: (this.state.progress + 0.01)
		})
		if (this.state.progress > 0.98) {
			this.stopPreloader()
		}
	}

	componentWillReceiveProps (props) {
		let opacity = props.visible ? 0.7 : 0
		this.stopPreloader()
		if (props.visible) {
			this.startPreloader()
		}
		Animated.timing(this.state.opacity, {
			toValue: opacity,
			duration: 200
		}).start()
	}

	render () {
		const { progress, opacity } = this.state
		if (this.props.hidden === true) return null
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
	visible: PropTypes.bool.isRequired,
	hidden: PropTypes.bool.isRequired,
	onTimePassedCallback: PropTypes.func.isRequired
}
