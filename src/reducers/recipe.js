import {
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION,

	SET_PRODUCT_AS_MAIN,
	SET_PRODUCT_AS_EXTRA,

	FETCH_RECIPE_LOADING,
	FETCH_RECIPE_SUCCESS,
	FETCH_RECIPE_ERROR,
	RESET_RECIPE,

	LOADING,
	SUCCESS,
	ERROR
} from '../constants/actionTypes'

const minPortions = 1
const maxPortions = 12

const initialState = {
	status: 'LOADING', // the initial fetch state of every fetch query
	title: '',
	cookingTime: 0,
	image: 'src',
	defaultPortion: 1,
	portion: 2,
	ingredients: [],
	stages: [{
		title: '',
		image: 'src',
		steps: ['', '']
	}]
}

function recipe (state = initialState, action) {
	switch (action.type) {
		case FETCH_RECIPE_LOADING:
			return {...state, ...{status: LOADING}}
		case FETCH_RECIPE_SUCCESS:
			let ingredients = action.payload.ingredients
			ingredients.forEach(item => {
				item.amountPerPortion = item.amount / action.payload.defaultPortion
			})
			return {
				...state,
				...{portion: action.payload.defaultPortion},
				...{status: SUCCESS},
				...{ingredients: ingredients},
				...action.payload
			}
		case FETCH_RECIPE_ERROR:
			return {
				...state,
				...{status: ERROR}
			}

		case INCREMENT_RECIPE_PORTION:
			if (state.portion >= maxPortions) return state
			ingredients = state.ingredients
			ingredients.forEach(item => {
				item.amount = state.portion * item.amountPerPortion
			})
			return {...state, ...{portion: state.portion + 1}, ...{ingredients: ingredients}}
		case DECREMENT_RECIPE_PORTION:
			if (state.portion <= minPortions) return state
			ingredients = state.ingredients
			ingredients.forEach(item => {
				item.amount = state.portion * item.amountPerPortion
			})
			return {...state, ...{portion: state.portion - 1}, ...{ingredients: ingredients}}

		case SET_PRODUCT_AS_MAIN:
			ingredients = state.ingredients
			ingredients.forEach((item, i) => {
				if (item.product._id === action.id) {
					ingredients[i].isMain = true
				}
			})
			return {...state, ...{ingredients: ingredients}}

		case SET_PRODUCT_AS_EXTRA:
			ingredients = state.ingredients
			ingredients.forEach((item, i) => {
				if (item.product._id === action.id) {
					ingredients[i].isMain = false
				}
			})
			return {...state, ...{ingredients: ingredients}}

		case RESET_RECIPE: return initialState
		default: return state
	}
}

export default recipe
