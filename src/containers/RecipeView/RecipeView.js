import React, { Component, PropTypes } from 'react'
import {
	ScrollView,
	View,
	Image,
	StatusBar,
	InteractionManager,
	NativeModules
} from 'react-native'
import Button from '../../components/Button'
import IngredientList from '../../components/IngredientList'
import ExtraProducts from '../../components/ExtraProducts'
import css from './RecipeView.css'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import Preloader from '../../components/Preloader'
import AppBar from '../../components/AppBar'
import LinearGradient from 'react-native-linear-gradient'
import BlackLayoutWithPreloader from '../../components/BlackLayoutWithPreloader'
const AppMetrika = NativeModules.AppMetrika

export default class RecipeView extends Component {
	componentWillMount () {
		this.setState({
			isReady: false,
			showBlackLayout: false
		})
		InteractionManager.runAfterInteractions(() => {
			this.setState({isReady: true})
			const { fetchRecipes, saveInLastViewed, currentRecipe } = this.props
			saveInLastViewed(currentRecipe)
			fetchRecipes(currentRecipe)
		})
	}

	componentWillUnmount () {
		this.props.resetRecipe()
	}

	componentWillReceiveProps (props) {
		if (props.general.isBookmarkModalOpen) {
			this.setState({
				showBlackLayout: true
			})
			setTimeout(() => {
				this.setState({
					showBlackLayout: false
				})
			}, 2500)
		}
	}

	_onPress () {
		const { recipe } = this.props
		AppMetrika.startCook(JSON.stringify({
			title: recipe.title
		}))
		this.props.navigatePush({key: 'Recipe', title: 'Процесс'})
	}

	_getHeight (e) {
		this.swiperHeight = e.nativeEvent.layout.height
	}

	_handleScroll (e) {
		const currentY = Math.floor(e.nativeEvent.contentOffset.y)
		var color = currentY + 24 > this.swiperHeight ? 'black' : 'transparent'
		StatusBar.setBackgroundColor(color, false)
	}

	renderIngredientList () {
		const { status } = this.props.recipe
		const {
			setProductAsMain,
			setProductAsExtra
		} = this.props
		const imageSrc = this.props.recipe.image
		switch (status) {
			case LOADING: return (
				<Preloader margin={80} />
			)
			case SUCCESS: return (
				<View style={css.recipe}>
					<View onLayout={this._getHeight.bind(this)}>
						<Image source={{uri: imageSrc}} style={css.recipe__image} />
						<View style={css.recipe__background}></View>
						<LinearGradient style={css.recipe__gradient1} colors={['black', 'transparent']} />
						<LinearGradient style={css.recipe__gradient2} colors={['rgba(0,0,0,.5)', 'transparent']} />
						<AppBar />
					</View>
					<IngredientList
						tabLabel='Продукты'
						setExtra={setProductAsExtra}
						recipe={this.props.recipe} />
					<ExtraProducts
						title={'можно добавить'}
						setMain={setProductAsMain}
						recipe={this.props.recipe} />
				</View>
			)
			case ERROR: return 'Сломалось или нет Интернета'
		}
	}

	renderContent () {
		const { isReady } = this.state
		if (isReady) {
			return (
				<ScrollView style={{backgroundColor: '#FAF9F7'}}
					onScroll={this._handleScroll.bind(this)}>
					{this.renderIngredientList()}
				</ScrollView>
			)
		}
		return null
	}

	renderBlackLayout () {
		if (this.state.showBlackLayout) {
			return (
				<BlackLayoutWithPreloader
					addToBookmarks
				/>
			)
		}
		return null
	}

	render () {
		return (
			<View style={{flex: 1, justifyContent: 'space-between'}}>
				<View style={{flex: 1}}>
					{this.renderContent()}
				</View>
				<Button
					onPress={this._onPress.bind(this)}
					text='Начать готовить' />
				{this.renderBlackLayout()}
			</View>
		)
	}
}

RecipeView.propTypes = {
	recipe: PropTypes.object.isRequired,
	fetchRecipes: PropTypes.func.isRequired,
	saveInLastViewed: PropTypes.func.isRequired,
	addToSavedRecipes: PropTypes.func.isRequired,
	removeFromSavedRecipes: PropTypes.func.isRequired,
	setProductAsMain: PropTypes.func.isRequired,
	setProductAsExtra: PropTypes.func.isRequired,
	navigatePush: PropTypes.func.isRequired,
	currentRecipe: PropTypes.string.isRequired,
	resetRecipe: PropTypes.func.isRequired,
	addToSavedRecipesButtonText: PropTypes.string,
	general: PropTypes.object.isRequired
}
