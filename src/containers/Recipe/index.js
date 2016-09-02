import Recipe from './Recipe'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import {
	nextSlide,
	previousSlide,
	handleSwipe,
	resetSlider
} from '../../actions/recipeSwiperActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentHeight: state.recipeSwiper.currentHeight,
	slides: state.recipeSwiper.slides,
	currentSlide: state.recipeSwiper.currentSlide
})

const dipsatchToProps = dispatch => (bindActionCreators({
	fetchRecipes,
	nextSlide,
	previousSlide,
	handleSwipe,
	resetSlider
}, dispatch))
export default connect(stateToProps, dipsatchToProps)(Recipe)
