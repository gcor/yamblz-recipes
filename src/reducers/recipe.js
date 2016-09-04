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
	defaultPortion: 0,
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
			return {
				...state,
				...{portion: 4},
				...{status: SUCCESS},
				...action.payload
			}
		case FETCH_RECIPE_ERROR:
			return {
				...state,
				...{status: ERROR}
			}

		case INCREMENT_RECIPE_PORTION:
			if (state.portion >= maxPortions) return state
			return {...state, ...{portion: state.portion + 1}}
		case DECREMENT_RECIPE_PORTION:
			if (state.portion <= minPortions) return state
			return {...state, ...{portion: state.portion - 1}}
		case RESET_RECIPE: return initialState
		default: return state
	}
}

export default recipe
