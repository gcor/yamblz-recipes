import {
	SLIDER_NEXT_SLIDE,
	SLIDER_PREVIOUS_SLIDE,
	SLIDER_SET_CURRENT_SLIDE,
	SLIDER_SET_INITIAL_SLIDE,
	SLIDER_PUSH_CARDS_HEIGHTS,
	SLIDER_WHERE_AM_I,
	SLIDER_RESET
} from '../constants/actionTypes'

const initialState = {
	initialSlide: 0,
	currentSlide: 0,
	currentHeight: 0,
	slides: []
}

const marginConst = 20
function recipeSwiper (state = initialState, action) {
	const { currentSlide, currentHeight, slides } = state
	switch (action.type) {
		case SLIDER_NEXT_SLIDE:
			if (currentSlide >= slides.length - 1) return state
			return {
				...state,
				currentSlide: currentSlide + 1,
				currentHeight: slides[currentSlide + 1].offsetY
			}
		case SLIDER_PREVIOUS_SLIDE:
			if (currentSlide <= 0) return state
			return {
				...state,
				currentSlide: currentSlide - 1,
				currentHeight: slides[currentSlide - 1].offsetY
			}
		case SLIDER_SET_CURRENT_SLIDE:
			// TODO - do not know now how to recursive to this
			return {...state, currentSlide: action.payload}
		case SLIDER_SET_INITIAL_SLIDE:
			return {...state, initialSlide: action.payload}
		case SLIDER_PUSH_CARDS_HEIGHTS:
			return {...state, slides: [...state.slides, ...action.payload]}
		case SLIDER_WHERE_AM_I:
			return {...state}
		case SLIDER_RESET:
			return initialState
		default: return state
	}
}

export default recipeSwiper
