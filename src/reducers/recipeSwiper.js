import {
	SLIDER_NEXT_SLIDE,
	SLIDER_PREVIOUS_SLIDE,
	SLIDER_SET_CURRENT_SLIDE,
	SLIDER_SET_INITIAL_SLIDE,
	SLIDER_PUSH_CARD_HEIGHT
} from '../constants/actionTypes'

const initialState = {
	initialSlide: 0,
	currentSlide: 0,
	slides: []
}

function recipeSwiper (state = initialState, action) {
	switch (action.type) {
		case SLIDER_NEXT_SLIDE:
			return {...state, currentSlide: state.currentSlide + 1}
		case SLIDER_PREVIOUS_SLIDE:
			return {...state, currentSlide: state.currentSlide - 1}
		case SLIDER_SET_CURRENT_SLIDE:
			return {...state, currentSlide: action.payload}
		case SLIDER_SET_INITIAL_SLIDE:
			return {...state, initialSlide: action.payload}
		case SLIDER_PUSH_CARD_HEIGHT:
			return {...state, slides: [...state.slides, ...action.payload]}
		default: return state
	}
}

export default recipeSwiper
