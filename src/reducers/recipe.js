import {
	FETCH_RECIPES,
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION
} from '../constants/actionTypes'

const minPortions = 1
const maxPortions = 12

const initialState = {
	title: '',
	cookingTime: 0,
	image: 'src',
	portions: 1,
	ingredients: [],
	stages: [{
		title: 'Почистите рыбу',
		image: 'src',
		steps: ['Мелко нарежьте чеснок', 'Смешайте нарезанный чеснок с размягченным сливочным маслом']
	}]
}

function recipe (state = initialState, action) {
	switch (action.type) {
		case FETCH_RECIPES:
			return {...state, ...action.recipes}
		case INCREMENT_RECIPE_PORTION:
			if (state.portions < maxPortions) {
				return Object.assign({}, state, {
					portions: state.portions + 1
				})
			} else return state
		case DECREMENT_RECIPE_PORTION:
			if (state.portions > minPortions) {
				return Object.assign({}, state, {
					portions: state.portions - 1
				})
			} else return state
		default: return state
	}
}

export default recipe
