import Recipe from './Recipe'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import {
	nextSlide,
	previousSlide,
	handleSwipe
} from '../../actions/recipeSwiperActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentHeight: state.recipeSwiper.currentHeight
})

const dipsatchToProps = dispatch => (bindActionCreators({
	fetchRecipes,
	nextSlide,
	previousSlide,
	handleSwipe
}, dispatch))
export default connect(stateToProps, dipsatchToProps)(Recipe)
