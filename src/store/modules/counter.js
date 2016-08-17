const initialState = {
  count: 5
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
    case INCREMENT: return {state, ...{count: state.count + 1}}
    case DECREMENT: return {state, ...{count: state.count - 1}}
    default: return state
  }
}

export default counter
