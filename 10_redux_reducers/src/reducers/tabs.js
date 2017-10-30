const initialState = {
  selectedTab: 'Home'
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'SET_TAB':
      return {
        selectedTab: action.payload
      }

    default:
      return state
  }
}

export const getSelectedTab = (state) => state.selectedTab
