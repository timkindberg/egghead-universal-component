import { createStore } from 'redux'
import createReducer from './reducers/index'

const configureStore = (initialState) => {
  const store = createStore(createReducer(), initialState)

  store.injectReducers = (asyncReducers) => 
    store.replaceReducer(
      createReducer(asyncReducers)
    )

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(require('./reducers').default)
    )
  }

  return store;
}

export default configureStore
