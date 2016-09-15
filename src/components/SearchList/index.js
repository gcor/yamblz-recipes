import SearchList from './SearchList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { navigatePush, navigatePop } from '../../actions/navigationActions'
import { setCurrentRecipe, setCurrentCategory } from '../../actions/generalActions'
import { searchGo } from '../../actions/searchActions'

const stateToProps = state => ({
	navigationState: state.navigationState,
	products: state.search.results.products,
	recipes: state.search.results.recipes,
	categories: state.search.results.categories,
	status: state.search.results.status
})
const dispatchToProps = dispatch => (
	bindActionCreators({
		searchGo,
		navigatePush,
		navigatePop,
		setCurrentCategory,
		setCurrentRecipe
	}, dispatch))
export default connect(stateToProps, dispatchToProps)(SearchList)
