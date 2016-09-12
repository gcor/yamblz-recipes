import React, { Component, PropTypes } from 'react'
import { View, NativeModules, TextInput } from 'react-native'
import Slider from '../Slider/'
import css from './SearchList.css'
import * as _ from 'lodash'

const AppMetrica = NativeModules.AppMetrika

class SearchList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			text: 'Что приготовим?',
			soon: 'Скоро в приложении',
			selectionData: [{
				title: 'События'
			}, {
				title: 'Кухни народов мира'
			}, {
				title: 'Специальные подборки'
			}],
			protectedData: [{
				title: 'Бульоны и супы'
			}, {
				title: 'Основные блюда'
			}, {
				title: 'Салаты'
			}, {
				title: 'Овощи'
			}, {
				title: 'Десерты'
			}]
		}
	}

	_onCardPress (recipeID) {
		const { navigatePush, setCurrentRecipe, recipes } = this.props
		const addFromSearch = _.find(recipes, {'_id': recipeID})
		if (addFromSearch) {
			AppMetrica.openRecipeFromSearch(JSON.stringify({
				title: addFromSearch.title,
				id: recipeID
			}))
		}
		setCurrentRecipe(recipeID)
		navigatePush({
			key: 'RecipeView',
			title: 'Подготовка'
		})
	}

	handleInput (text) {
		this.setState({text})
		const { searchGo } = this.props
		searchGo(text)
	}

	renderFound () {
		const { recipes } = this.props
		if (recipes.length > 0) {
			return (
				<Slider
					title={'Найдено'}
					id={'1'}
					onPressHandler={this._onCardPress.bind(this)}
					recipes={recipes || []} />
			)
		} else {
			return null
		}
	}

	render () {
		console.log(this.props)
		return (
			<View style={css.searchList}>
				<TextInput
					style={css.searchlist__input}
					onChangeText={this.handleInput.bind(this)}
					placeholder={this.state.text}
				/>
			{this.renderFound()}
			</View>
		)
	}
}

// import SearchItem from '../SearchItem/'
// import SuggestList from '../SuggestList/'
// const { products } = this.props
// <SuggestList
// 	onPress={this.onSuggestItemPress.bind(this)}
// 	items={products}
// 	/>
// {this.state.selectionData.map((data, i) => {
// 	return <SearchItem data={data} key={i} />
// })}
// <Text style={css.searchList__header}>{this.state.soon.toUpperCase()}</Text>
// {this.state.protectedData.map((data, i) => {
// 	return <SearchItem data={data} key={i} />
// })}

SearchList.propTypes = {
	searchGo: PropTypes.func.isRequired,
	navigatePush: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	products: PropTypes.array,
	recipes: PropTypes.array
}

export default SearchList
