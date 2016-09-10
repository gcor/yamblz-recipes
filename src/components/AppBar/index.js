import AppBar from './AppBar'
import { connect } from 'react-redux'
import { navigatePush, nivigatePop } from '../../actions/navigationActions'

export default connect(
    state => ({}),
    dispatch => ({
        pushToHistory: () => dispatch(navigatePush({
            key: 'History',
            title: 'Ваши рецепты'
        })),
        pushToCategory: () => dispatch(navigatePush({
            key: 'Category',
            title: 'Категория'
        })),
        pushToSearch: () => dispatch(navigatePush({
            key: 'Search',
            title: 'Поиск'
        })),
        navigateBack: () => dispatch(nivigatePop())
    })
)(AppBar)
