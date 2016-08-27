import { FETCH_RECIPES } from '../constants/actionTypes'

const initialState = {
	title: '',
	cookingTime: 0,
	image: 'src',
	stages: [{
		title: 'Почистите рыбу',
		image: 'src',
		steps: ['Мелко нарежьте чеснок', 'Смешайте нарезанный чеснок с размягченным сливочным маслом']
	}]
}

function recipe (state = initialState, action) {
	switch (action.type) {
		case FETCH_RECIPES: return {state, ...action.recipes}
		default: return state
	}
}
export default recipe
