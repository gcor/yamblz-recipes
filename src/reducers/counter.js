const initialState = {
	count: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => ({
	type: INCREMENT
})
export const decrement = () => ({
	type: DECREMENT
})

const counter = (state = initialState, action) => {
	switch (action.type) {
	case INCREMENT: return {state, ...{count: state.count + 10}}
	case DECREMENT: return {state, ...{count: state.count - 10}}
	default: return state
	}
}

export default counter
