import {
	SLIDER_NEXT_SLIDE,
	SLIDER_PREVIOUS_SLIDE,
	SLIDER_SET_CURRENT_SLIDE,
	SLIDER_SET_INITIAL_SLIDE,
	SLIDER_HANDLE_SWIPE,
	SLIDER_PUSH_CARDS_HEIGHTS,
	SLIDER_RESET
} from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const nextSlide = createAction(SLIDER_NEXT_SLIDE)
export const previousSlide = createAction(SLIDER_PREVIOUS_SLIDE)
export const setCurrentSlide = createAction(SLIDER_SET_CURRENT_SLIDE)
export const setInitialSlide = createAction(SLIDER_SET_INITIAL_SLIDE)
export const handleSwipe = createAction(SLIDER_HANDLE_SWIPE)
export const pushCardsHeights = createAction(SLIDER_PUSH_CARDS_HEIGHTS)
export const resetSlider = createAction(SLIDER_RESET)
