const initialState = 0;

export default (state=initialState, action) => {
  switch(action.type) {
    case 'SET_INDEX':
      return action.payload

    default:
      return state
  }
}

export const getIndex =
  (state) => state.foo
