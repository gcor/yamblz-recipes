import {
	SET_CURRRENT_RECIPE,
	SET_CURRENT_CATEGORY,
	OPEN_MODAL_BOOKMARK_SAVED
} from '../constants/actionTypes'

const initialState = {
	currentRecipe: '', // id текущего рецепта
	currentCategory: '', // id текущей категории,
	isBookmarkModalOpen: false
}
function general (state = initialState, action) {
	switch (action.type) {
		case SET_CURRRENT_RECIPE:
			return {
				...state,
				...{currentRecipe: action.payload}
			}
		case SET_CURRENT_CATEGORY:
			return {
				...state,
				...{currentCategory: action.payload}
			}
		case OPEN_MODAL_BOOKMARK_SAVED:
			return {
				...state,
				...{isBookmarkModalOpen: action.payload}
			}
		default: return state
	}
}

export default general
