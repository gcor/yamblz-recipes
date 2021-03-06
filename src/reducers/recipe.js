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
	status: 'LOADING',
	title: '',
	cookingTime: 0,
	image: 'src',
	defaultPortion: 1,
	portion: 2,
	ingredients: [],
	isFavourite: false,
	_id: '',
	stages: [{
		title: '',
		image: 'src',
		steps: ['', '']
	}]
}

function recipe (state = initialState, action) {
	switch (action.type) {
// FETCH_RECIPE_LOADING
		case FETCH_RECIPE_LOADING:
			return {
				...state,
				...{status: LOADING}
			}
// FETCH_RECIPE_SUCCESS
		case FETCH_RECIPE_SUCCESS:
			let ingredients = action.payload.ingredients
			let stages = action.payload.stages
			ingredients.forEach(item => {
				item.amountPerPortion = item.amount / action.payload.defaultPortion
			})
			for (const stage of stages) {
				for (const step of stage.steps) {
					if (step.requiredProduct) step.visible = false
					else step.visible = true
				}
			}
			return {
				...state,
				...{portion: action.payload.defaultPortion},
				...{status: SUCCESS},
				...{ingredients: ingredients},
				...{stages: stages},
				...action.payload
			}
// FETCH_RECIPE_ERROR
		case FETCH_RECIPE_ERROR:
			return {
				...state,
				...{status: ERROR}
			}
// INCREMENT_RECIPE_PORTION
		case INCREMENT_RECIPE_PORTION:
			if (state.portion >= maxPortions) return state
			ingredients = state.ingredients
			let portion = state.portion + 1

			ingredients.forEach(item => {
				item.amount = portion * item.amountPerPortion
			})

			return {
				...state,
				...{portion: portion},
				...{ingredients: ingredients}
			}
// DECREMENT_RECIPE_PORTION
		case DECREMENT_RECIPE_PORTION:
			if (state.portion <= minPortions) return state
			ingredients = state.ingredients
			portion = state.portion - 1

			ingredients.forEach(item => {
				item.amount = portion * item.amountPerPortion
			})

			return {
				...state,
				...{portion: portion},
				...{ingredients: ingredients}
			}
// SET_PRODUCT_AS_MAIN
		case SET_PRODUCT_AS_MAIN:
			ingredients = state.ingredients

			ingredients.forEach((item, i) => {
				if (item.product._id === action.id) {
					ingredients[i].isMain = true
				}
			})

			stages = state.stages
			for (const stage of stages) {
				for (const step of stage.steps) {
					if (step.requiredProduct) {
						if (step.requiredProduct === action.id) step.visible = true
					}
				}
			}

			return {
				...state,
				...{ingredients: ingredients},
				...(stages: stages)
			}
// SET_PRODUCT_AS_EXTRA
		case SET_PRODUCT_AS_EXTRA:
			ingredients = state.ingredients

			ingredients.forEach((item, i) => {
				if (item.product._id === action.id) {
					ingredients[i].isMain = false
				}
			})

			stages = state.stages
			for (const stage of stages) {
				for (const step of stage.steps) {
					if (step.requiredProduct) {
						if (step.requiredProduct === action.id) step.visible = false
					}
				}
			}

			return {
				...state,
				...{ingredients: ingredients},
				...(stages: stages)
			}
// RESET_RECIPE
		case RESET_RECIPE: return initialState
		default: return state
	}
}

export default recipe
