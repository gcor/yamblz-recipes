import React, { Component, PropTypes } from 'react'
import { View, Animated, Image, TouchableWithoutFeedback } from 'react-native'
import SpeechIcon from '../../../icons/micro.png'
import SpeechIconOn from '../../../icons/micro2.png'
import css from '../Icons.css'

export default class Micro extends Component {
    constructor () {
        super()
        this.state = {
            scale: new Animated.Value(1),
            toggle: false
        }
    }

    _onPress () {
        const { toggle } = this.state
        if (toggle) {
            this.setState({ toggle: false })
        }
        else {
            this.setState({ toggle: true })
            this.animateState()
        }

        this.props.handlePress(!toggle)
    }

    animateState () {  
        Animated.sequence([
            Animated.timing(this.state.scale, {
                toValue: 1.1,
                duration: 200
            }),
                Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 200
            })
        ]).start(() => {
            if (this.state.toggle) {
                this.animateState()
            }
        })
    }

    render () {
        const { scale } = this.state
        const { onPress } = this.props
        return (
            <TouchableWithoutFeedback style={css.bar__hilight}
                onPress={this._onPress.bind(this)}>
                    <Animated.Image style={[css.bar__icon, {transform: [{scale: scale}]}]}
                        source={this.state.toggle ? SpeechIconOn : SpeechIcon} />
            </TouchableWithoutFeedback>
        )
    }
}

Micro.propTypes = {
    handlePress: PropTypes.func.isRequired
}