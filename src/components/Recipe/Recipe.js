import React, { Component, PropTypes } from 'react'
import KeepAwake from 'react-native-keep-awake'
import { View } from 'react-native'
import RecipeItem from '../RecipeItem'
import Brain from '../Brain'

class Recipe extends Component {
	componentWillMount () {
		this.setState({slides: [], stages: []})
	}

	componentWillUnmount () {
		Brain.resetIngredients()
	}

	render () {
		const { data } = this.props
		let { stages, ingredients } = data
		Brain.setIngredients(ingredients)

		let recipeItems = null
		if (data.stages) {
			recipeItems = stages.map((stage, index) => {
				return (
					<RecipeItem
						key={index}
						stage={stage}
						numberOfStage={index + 1}
						image={stage.image}
						calculateSlideHeight={this.calculateSlideHeight.bind(this)}
					/>
				)
			})
		}
		return (
			<View>
				<KeepAwake />
				{recipeItems}
			</View>
		)
	}

	calculateSlideHeight (slide) {
		let tmpSlides = this.state.slides
		slide.height = Math.floor(slide.height)
		slide.offsetY = Math.floor(slide.offsetY)
		tmpSlides.push(slide)
		this.setState({slides: tmpSlides})
		// the last slide callback is here
		if (slide.index >= this.props.data.stages.length) {
			this.props.pushCardsHeights(this.state.slides)
		}
	}
}

Recipe.propTypes = {
	data: PropTypes.object.isRequired,
	pushCardsHeights: PropTypes.func.isRequired
}

export default Recipe
