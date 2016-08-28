import React, { Component, PropTypes } from 'react'
import { View, TouchableHighlight, ScrollView } from 'react-native'
import Slider from '../../components/Slider'
import ui from '../../constants/css'

class Category extends Component {
	componentWillMount () {
		this.props.fetchCategories()
	}
	_onPressHandler (recipeID) {
		this.props.navigatePush({
			key: 'RecipeView',
			title: 'Подготовка',
			recipeID: recipeID
		})
		console.log('handler', recipeID)
	}
	renderCategory (category) {
		const { title, id, recipes } = category
		return (
			<Slider
				title={title}
				key={id} id={id}
				onPressHandler={this._onPressHandler.bind(this)}
				recipes={recipes} />
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

Category.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	fetchCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired
}

export default Category
