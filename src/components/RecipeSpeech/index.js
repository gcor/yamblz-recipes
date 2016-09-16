import RecipeSpeech from './RecipeSpeech'
import { connect } from 'react-redux'
import {
	nextSlide,
	previousSlide,
	resetSlider
} from '../../actions/recipeSwiperActions'
import { bindActionCreators } from 'redux'

const stateToProps = state => ({
	recipe: state.recipe,
	currentSlide: state.recipeSwiper.currentSlide,
	scroll: state.recipeSwiper.scroll
})

const dipsatchToProps = dispatch => (bindActionCreators({
	nextSlide,
	previousSlide,
	resetSlider
}, dispatch))
export default connect(stateToProps, dipsatchToProps)(RecipeSpeech)
