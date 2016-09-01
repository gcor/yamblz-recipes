import React, { Component, PropTypes } from 'react'
import { Text, ScrollView } from 'react-native'
import Slider from '../../components/Slider'
import CardSmall from '../../components/CardSmall'

export default class History extends Component {
	componentWillMount () {
		this.props.fetchHistory()
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
		const recipes = [{
			'_id': '57bfd586a53d1d73154d9339',
			'id': 3,
			'title': 'Фриттата с брокколи и сладким перцем',
			'time': 20,
			'energy': 321,
			'complexity': 'Средне',
			'category': 1,
			'image': 'http://www.taste.com.au/images/recipes/agt/2005/06/vegetable-frittata-2205_l.jpeg',
			'stages': [],
			'__v': 0
		}, {
			'_id': '57bfe641a6bae0f91575a084',
			'id': 5,
			'title': 'Курица меланезе со спагетти',
			'time': 70,
			'energy': 423,
			'complexity': 'Средне',
			'category': 2,
			'image': 'https://www.caffeconcerto.co.uk/images-menus/meat-chicken-milanese-with-spaghetti_tn-jpg_1466080216.jpg',
			'stages': [],
			'__v': 0
		}]
		return (
			<ScrollView style={{marginTop: 60, backgroundColor: '#FAF9F7'}}>
				<Slider
					title={'Вы недавно смотрели'}
					id={'1'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={recipes} />
				<Text style={{fontSize: 16, color: 'rgba(0,0,0,.56)', marginLeft: 24, marginBottom: 16, marginTop: 24}}>
					СОХРАНЕННЫЕ
				</Text>
				<CardSmall title={'Завтрак'} amount={4} image={'https://secure.static.tumblr.com/c00d0aa6e43b484744e8e8fa190973fd/u8vmxqx/hN7npbd0d/tumblr_static_tumblr_static_3vjd15s4y50k40kww4wk8cokk_640.jpg'} />
				<CardSmall title={'Обед'} amount={6} image={'http://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/goodvegetablesoup_73412_16x9.jpg'} />
				<CardSmall title={'Ужин'} amount={2} image={'http://cpplymouth.com/up/Creekside_event_table_setting_with_salmon_dinner_and_wine.jpg'} />
			</ScrollView>
		)
	}
}

History.propTypes = {
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	fetchHistory: PropTypes.func.isRequired
}
// onCategoryPress={this._onCategoryPress.bind(this)}
