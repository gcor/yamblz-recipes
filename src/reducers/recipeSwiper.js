import {
	SLIDER_NEXT_SLIDE,
	SLIDER_PREVIOUS_SLIDE,
	SLIDER_SET_CURRENT_SLIDE,
	SLIDER_SET_INITIAL_SLIDE,
	SLIDER_PUSH_CARDS_HEIGHTS,
	SLIDER_RESET,
	SLIDER_GO_TO,
	SLIDER_GO_TO_START
} from '../constants/actionTypes'

const initialState = {
	initialSlide: 0,
	currentSlide: 0,
	currentHeight: 0,
	slides: [],
	scroll: true
}

const marginConst = 20
function recipeSwiper (state = initialState, action) {
	const { currentSlide, slides } = state
	switch (action.type) {
		case SLIDER_NEXT_SLIDE:
			if (currentSlide >= slides.length - 1) return state
			let isScroll = true
			if (action.payload) {
				if (action.payload.scroll === true ||
					action.payload.scroll === false) {
					isScroll = action.payload.scroll
				}
			}
			return {
				...{slides: state.slides},
				...{currentSlide: currentSlide + 1},
				...{currentHeight: slides[currentSlide + 1].offsetY - marginConst},
				...{scroll: isScroll}
			}
		case SLIDER_PREVIOUS_SLIDE:
			if (currentSlide <= 0) return state
			isScroll = true
			if (action.payload) {
				if (action.payload.scroll === true ||
					action.payload.scroll === false) {
					isScroll = action.payload.scroll
				}
			}
			return {
				...{slides: state.slides},
				...{currentSlide: currentSlide - 1},
				...{currentHeight: slides[currentSlide - 1].offsetY - marginConst},
				...{scroll: isScroll}
			}
		case SLIDER_SET_CURRENT_SLIDE:
			// TODO - do not know now how to recursive to this
			return {...state, currentSlide: action.payload}
		case SLIDER_SET_INITIAL_SLIDE:
			return {...state, initialSlide: action.payload}
		case SLIDER_PUSH_CARDS_HEIGHTS:
			return {...state, slides: [...state.slides, ...action.payload]}
		case SLIDER_GO_TO:
			return {
				...state,
				...{currentSlide: action.payload},
				...{currentHeight: slides[action.payload].offsetY - marginConst},
				...{scroll: true}
			}
		case SLIDER_GO_TO_START:
			return {
				...state,
				...{currentSlide: 0},
				...{currentHeight: slides[0].offsetY - marginConst},
				...{scroll: true}
			}
		case SLIDER_RESET:
			return initialState
		default: return state
	}
}

export default recipeSwiper
