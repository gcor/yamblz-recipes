import React, { Component, PropTypes } from 'react'
import { ScrollView, InteractionManager } from 'react-native'
import Slider from '../../components/Slider'

export default class History extends Component {
	componentWillMount () {
		InteractionManager.runAfterInteractions(() => {
			this.props.fetchHistory()
		})
	}
	_onCardPress (recipeID) {
		const { navigatePush, setCurrentRecipe } = this.props
		setCurrentRecipe(recipeID)
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}
	_onCategoryPress () {
		const { navigatePush } = this.props
		navigatePush({
			key: 'Category',
			title: 'Сохраненные'
		})
	}
	render () {
		return (
			<ScrollView style={{marginTop: 60, backgroundColor: '#FAF9F7'}}>
				<Slider
					title={'Вы недавно смотрели'}
					id={'1'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={this.props.recipes} />
			</ScrollView>
		)
	}
}
// <Text style={{fontSize: 16, color: 'rgba(0,0,0,.56)', marginLeft: 24, marginBottom: 16, marginTop: 24}}>
// 	СОХРАНЕННЫЕ
// </Text>
// <CardSmall title={'Завтрак'} amount={4} image={'https://secure.static.tumblr.com/c00d0aa6e43b484744e8e8fa190973fd/u8vmxqx/hN7npbd0d/tumblr_static_tumblr_static_3vjd15s4y50k40kww4wk8cokk_640.jpg'} />
// <CardSmall title={'Обед'} amount={6} image={'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/goodvegetablesoup_73412_16x9.jpg'} />
// <CardSmall title={'Ужин'} amount={2} image={'http://cpplymouth.com/up/Creekside_event_table_setting_with_salmon_dinner_and_wine.jpg'} />
History.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	fetchHistory: PropTypes.func.isRequired,
	clearHistory: PropTypes.func.isRequired,
	recipes: PropTypes.array.isRequired
}
// onCategoryPress={this._onCategoryPress.bind(this)}
