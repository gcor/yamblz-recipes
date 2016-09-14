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
				icon: icons.cup
			}, {
				title: 'Обед',
				icon: icons.dinner
			}, {
				title: 'Ужин',
				icon: icons.lunch
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

	_onCategoryPress (title) {
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
						onItemPress={this._onCategoryPress.bind(this, data.title)}
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
		} else {
			return this.renderCategories()
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
						style={css.searchlist__input}
						onChangeText={this.handleInput.bind(this)}
						placeholder={this.state.text}
					/>
				</View>
			{this.renderFound()}
			</View>
		)
	}
}

SearchList.propTypes = {
	searchGo: PropTypes.func.isRequired,
	navigatePush: PropTypes.func.isRequired,
	navigatePop: PropTypes.func.isRequired,
	setCurrentRecipe: PropTypes.func.isRequired,
	products: PropTypes.array,
	recipes: PropTypes.array
}

export default SearchList
