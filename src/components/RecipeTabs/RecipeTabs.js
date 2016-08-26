import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Tab from '../Tab'
import IngredientList from '../IngredientList'
import StageList from '../StageList'
import css from './RecipeTabs.css'
import Swiper from 'react-native-swiper'

class RecipeTabs extends Component {
	constructor (props) {
		super(props)
		this.state = {
			activeTab: 0
		}
	}

	changeTo (index) {
		if (this.state.activeTab === index) return false
		console.log(index)
		this.setState({
			activeTab: index
		})
		switch (index) {
			case 0: return this.swiper.scrollBy(-1)
			case 1: return this.swiper.scrollBy(1)
		}
	}

	handleSwipe (index) {
		console.log(index)
		this.setState({
			activeTab: index
		})
	}

	render () {
		let { activeTab } = this.state
		return (
			<View>
				<View style={css.tabs}>
					<Tab style={[css.tabs__item, activeTab === 0
							? css.tabs__item_active
							: '']}
						onPress={() => this.changeTo(0)}
						textStyle={css.tabs__itemText}
						tabTitle={'ЭТАПЫ'}
					/>
					<Tab style={[css.tabs__item, activeTab === 1
							? css.tabs__item_active
							: '']}
						onPress={() => this.changeTo(1)}
						textStyle={css.tabs__itemText}
						tabTitle={'ПРОДУКТЫ'}
					/>
				</View>
				<Swiper loop={false}
					ref={(r) => this.swiper = r}
					onMomentumScrollEnd={(e, state) => this.handleSwipe(state.index)}>
					<StageList tabLabel='Этапы' recipe={this.props.recipe} />
					<IngredientList tabLabel='Продукты' recipe={this.props.recipe} />
				</Swiper>
			</View>
		)
	}
}

RecipeTabs.propTypes = {
	recipe: PropTypes.object.isRequired
}

export default RecipeTabs
