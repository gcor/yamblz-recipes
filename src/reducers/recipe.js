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
			if (state.portions >= maxPortions) return state
			return {...state, ...{portions: state.portions + 1}}
		case DECREMENT_RECIPE_PORTION:
			if (state.portions <= minPortions) return state
			return {...state, ...{portions: state.portions - 1}}
		default: return state
	}
}

export default recipe
