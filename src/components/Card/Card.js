import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import css from './Card.css'

// <View style={css.card__image}></View>

export default class Card extends Component {
	render () {
		return (
			<TouchableHighlight
				underlayColor='transparent'
				onPress={this.props.onPressHandler}
				>
				<View style={[css.card, this.props.style]}>
					<View style={css.card__preview}>
            <Image source={{uri: this.props.data.image}} style={css.card__image}/>
					</View>
					<Text style={css.card__title}>{this.props.data.title}</Text>
					<View style={css.card__description}>
						<View style={css.card__side}>
							<Text style={css.card__text}>{this.props.data.time}</Text>
							<Text style={css.card__divider}>.</Text>
							<Text style={css.card__text}>{this.props.data.complexity}</Text>
						</View>
						<View style={css.card__side}>
							<Text style={[css.card__text, css.card__text_right]}>{this.props.data.energy}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
