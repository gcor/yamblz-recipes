import React, { Component, PropTypes } from 'react'
import { View, TouchableHighlight, ScrollView } from 'react-native'
import Slider from '../../components/Slider'
import ui from '../../constants/css'

class Home extends Component {
	_onPressHandler () {
		this.props.navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}
	renderCategory (category) {
		const { title, id, recipes } = category
		return (
			<Slider
				title={title}
				key={id} id={id}
				onPressHandler={this._onPressHandler.bind(this)}
				cards={recipes} />
		)
	}
	render () {
		const { categories } = this.props
		console.log(categories)
		return (
			<ScrollView>
				<TouchableHighlight>
					<View style={ui.page}>
						{categories.map(category => this.renderCategory(category))}
					</View>
				</TouchableHighlight>
			</ScrollView>
		)
	}
}

Home.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
}

export default Home
