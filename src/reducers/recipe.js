import {
	INCREMENT_RECIPE_PORTION,
	DECREMENT_RECIPE_PORTION,

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
		case FETCH_RECIPE_LOADING:
			return {...state, ...{status: LOADING}}
		case FETCH_RECIPE_SUCCESS:
			return {
				...state,
				...{status: SUCCESS},
				...action.payload
			}
		case FETCH_RECIPE_ERROR:
			return {
				...state,
				...{status: ERROR}
			}

		case INCREMENT_RECIPE_PORTION:
			if (state.portions >= maxPortions) return state
			return {...state, ...{portions: state.portions + 1}}
		case DECREMENT_RECIPE_PORTION:
			if (state.portions <= minPortions) return state
			return {...state, ...{portions: state.portions - 1}}
		case RESET_RECIPE: return initialState
		default: return state
	}
}

export default recipe
