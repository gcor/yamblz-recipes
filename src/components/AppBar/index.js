import AppBar from './AppBar'
import { connect } from 'react-redux'
import { navigatePush, navigatePop } from '../../actions/navigationActions'
import { addToHistory } from '../../actions/historyActions'

export default connect(
    state => ({
        navigationState: state.navigationState,
        recipe: state.recipe,
    }),
    dispatch => ({
        pushToHistory: () => dispatch(navigatePush({
            key: 'History',
            title: 'Ваши рецепты'
        })),
        pushToCategory: (title) => dispatch(navigatePush({
            key: 'Category',
            title: title
        })),
        pushToSearch: () => dispatch(navigatePush({
            key: 'Search',
            title: 'Поиск'
        })),
        navigateBack: () => dispatch(navigatePop()),
        addToHistory
    })
)(AppBar)
