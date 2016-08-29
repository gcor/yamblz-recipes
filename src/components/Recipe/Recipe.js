import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import RecipeItem from '../RecipeItem'
import Timer from '../Timer'
// import css from './Recipe.css'

class Recipe extends Component {
	componentWillMount () {
		this.setState({recipes: []})
	}
	calculateSlideHeight (slide) {
		const { index, height } = slide
		console.log(this.state)
		// sl.push(slide)
		// this.setState({slides: sl})
		console.log(index, height)
	}

	componentDidMount () {
		const self = this
		setTimeout(() => {
			console.log(self.state.slides)
		}, 2000)
	}
	render () {
		const { data } = this.props
		let recipeItems = null
		if (data.stages) {
			recipeItems = data.stages.map((stage, index) => {
				return (
					<RecipeItem
						key={index}
						stage={stage}
						numberOfStage={index + 1}
						image={stage.image}
						calculateSlideHeight={this.calculateSlideHeight}
					/>
				)
			})
		}
		return (
			<View>
				{recipeItems}
			</View>
		)
		// <Text style={css.recipe__note}>Мы напомним когда нужно будет проверить или помешать</Text>
	}
}

Recipe.propTypes = {
	data: PropTypes.object.isRequired
}

export default Recipe
