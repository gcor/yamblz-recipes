import React, { Component, PropTypes } from 'react'
import { Text, View, Image, NativeModules, TouchableHighlight, TextInput } from 'react-native'
import Slider from '../Slider/'
import SearchItem from '../SearchItem/'
import css from './SearchList.css'
import * as _ from 'lodash'
import icons from '../../icons'

const AppMetrica = NativeModules.AppMetrika

class SearchList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			text: 'Что приготовим?',
			soon: 'Скоро в приложении',
			selectionData: [{
				title: 'Завтрак',
				icon: icons.cup,
				id: '57bfd586a53d1d73154d933a'
			}, {
				title: 'Обед',
				icon: icons.dinner,
				id: '57bfe68c624944001682a016'
			}, {
				title: 'Ужин',
				icon: icons.lunch,
				id: '57c000266c25f8411701256e'
			}],
			protectedData: [{
				title: 'Овощи',
				icon: icons.lock
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

	_onCategoryPress (title, categoryId) {
		this.props.setCurrentCategory(categoryId)
		this.props.navigatePush({
			key: 'Category',
			title: title
		})
	}

	handleInput (text) {
		this.setState({text})
		const { searchGo } = this.props
		searchGo(text)
	}

	renderCategories () {
		return (
			<View>
				{this.state.selectionData.map((data, i) => {
					return <SearchItem
						onItemPress={this._onCategoryPress.bind(this, data.title, data.id)}
						data={data}
						key={i} />
				})}
				<Text style={css.searchList__header}>{this.state.soon.toUpperCase()}</Text>
				{this.state.protectedData.map((data, i) => {
					return <SearchItem data={data} key={i} />
				})}
			</View>
		)
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
		}
	}

	render () {
		return (
			<View style={css.searchList}>
				<View style={css.searchList__bar}>
					<TouchableHighlight
						underlayColor={'rgba(255,255,255,0.2)'}
						onPress={this.props.navigatePop.bind(this)}>
						<Image style={css.searchList__back} source={icons.back} />
					</TouchableHighlight>
					<TextInput
						placeholderTextColor={'black'}
						style={css.searchlist__input}
						onChangeText={this.handleInput.bind(this)}
						placeholder={this.state.text}
					/>
				</View>
			{this.renderFound()}
			{this.renderCategories()}
			</View>
		)
	}
}

SearchList.propTypes = {
	searchGo: PropTypes.func.isRequired,
	navigatePush: PropTypes.func.isRequired,
	navigatePop: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	setCurrentCategory: PropTypes.func.isRequired,
	products: PropTypes.array,
	recipes: PropTypes.array
}

export default SearchList
