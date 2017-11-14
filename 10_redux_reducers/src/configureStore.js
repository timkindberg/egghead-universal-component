import { createStore } from 'redux'
import reducer from './reducers/index'

const configureStore = (initialState) => {
  const store = createStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(require('./reducers').default)
    )
  }

  return store;
}

export default configureStore
