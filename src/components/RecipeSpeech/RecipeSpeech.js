import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './RecipeSpeech.css'
import SpeechIcon from '../../icons/micro.png'

export default class RecipeSpeech extends Component {
    render () {
        return (
            <TouchableHighlight style={css.speech__highlight}
                underlayColor='rgba(255,255,255,0.2)'>
                <Image style={css.speech__icon} source={SpeechIcon} />
            </TouchableHighlight>  
        )
    }
}

RecipeSpeech.propTypes = {
        
}
