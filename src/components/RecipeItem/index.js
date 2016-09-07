import RecipeItem from './RecipeItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import pushCardHeight from '../../actions/recipeSwiperActions'

export default connect(
	state => ({
		ingredients: state.recipe.ingredients
	}),
	dispatch => (bindActionCreators({ pushCardHeight }, dispatch))
)(RecipeItem)
