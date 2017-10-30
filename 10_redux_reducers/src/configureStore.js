import { createStore } from 'redux'

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(reducers)
    );
  }

  return store;
}

export default configureStore;
