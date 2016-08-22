import { FETCH_CARDS } from '../constants/actionTypes'

const _fetchCards = cards => ({
	type: FETCH_CARDS,
	cards
})
export const fetchCards = () => {
	return dispatch => {
		dispatch(_fetchCards([1, 2, 3]))
	}
}
