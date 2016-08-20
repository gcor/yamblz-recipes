const initialState = {
	id: 1,
	title: 'Пицца',
	img: ''
}

const CHANGE_TITLE = 'CHANGE_TITLE'

function recipes (state = initialState, action) {
	switch (action.type) {
		case CHANGE_TITLE: return {state, ...{title: action.title}}
		default: return state
	}
}
export default recipes
