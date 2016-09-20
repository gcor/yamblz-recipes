import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, View, Animated, ListView } from 'react-native'
import TimerLabel from '../TimerLabel'
import TimerActions from '../TimerActions'
import { SwipeListView } from 'react-native-swipe-list-view'
import s from './AbsoluteTimer.css'

const timerHeight = 60
export default class AbsoluteTimer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			timersCount: props.timers.length,
			translateY: new Animated.Value(-timerHeight * (props.timers.length - 1)),
			isHidden: false
		}
		this.handleToggle = this.handleToggle.bind(this)
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	}

	componentWillReceiveProps (props) {
		this.setState({
			translateY: new Animated.Value(-timerHeight * (props.timers.length - 1))
		})
	}

	renderTimers () {
		const { timers, removeTimer, pauseTimer } = this.props
		return (
			<SwipeListView
				style={{height: timerHeight * (timers.length) + 5}}
				disableRightSwipe
				rightOpenValue={-100}
				dataSource={this.ds.cloneWithRows(timers)}
				renderRow={timer => {
					const { actionLabel, timeout, paused } = timer
					const index = timers.indexOf(timer)
					return (
						<TouchableOpacity activeOpacity={1}
							onPress={index === 0
								? this.handleToggle
								: null}>
							<TimerLabel
								key={index}
								withTimeline={index === 0}
								actionLabel={actionLabel}
								timeout={timeout}
								paused={paused || false}
							/>
						</TouchableOpacity>
					)
				}}
				renderHiddenRow={timer => {
					const { actionLabel, timeout } = timer
					const index = timers.indexOf(timer)
					return (
						<TimerActions
							removeTimer={removeTimer}
							pauseTimer={pauseTimer}
							timerID={index}
						/>
					)
				}}
			/>
	)
	}

	renderDrawer () {
		if (this.props.timers.length < 2) return null
		return (
			<TouchableOpacity style={s.drawer} onPress={this.handleToggle}>
				<View style={s.button}></View>
			</TouchableOpacity>
		)
	}

	handleToggle () {
		const animatedValue = this.state.isHidden
		? -(this.props.timers.length - 1) * timerHeight
		: 0
		this.setState({isHidden: !this.state.isHidden})
		Animated.spring(this.state.translateY, {
			toValue: animatedValue
		}).start()
	}

	render () {
		const { timers } = this.props
		if (timers.length === 0) return null
		const { translateY } = this.state
		return (
			<View>
				<Animated.View
					style={[s.container, {marginBottom: translateY}]}
					showsVerticalScrollIndicator={false}>
					{this.renderDrawer()}
					{this.renderTimers()}
				</Animated.View>
			</View>
		)
	}
}

AbsoluteTimer.propTypes = {
	timers: PropTypes.array.isRequired,
	goToTimers: PropTypes.func.isRequired,
	removeTimer: PropTypes.func.isRequired,
	pauseTimer: PropTypes.func.isRequired,
	toggleBlackLayout: PropTypes.func.isRequired
}
