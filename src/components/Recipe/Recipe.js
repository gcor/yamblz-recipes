import React, { Component, PropTypes } from 'react'
import { View, Text, InteractionManager } from 'react-native'
import RecipeItem from '../RecipeItem/RecipeItem'
import css from './Recipe.css'

class Recipe extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isReady: false
		}
	}
	renderSteps () {
		const { data } = this.props
		if (data.stages) {
			console.log(data.stages)
			return data.stages.map((stage, index) => {
				return (
					<RecipeItem
						key={index}
						stage={stage}
						numberOfStage={index + 1}
						image={stage.image}
					/>
				)
			})
		}

		return null
	}

	componentDidMount () {
		InteractionManager.runAfterInteractions(() => {
			this.setState({isReady: true})
		})
	}
	render () {
		if (!this.state.isReady) {
			return null
		}
		return (
			<View>
				{this.renderSteps()}
				<Text style={css.recipe__note}>Мы напомним когда нужно будет проверить или помешать</Text>
			</View>
		)
	}
}

Recipe.propTypes = {
	data: PropTypes.object.isRequired
}

export default Recipe
