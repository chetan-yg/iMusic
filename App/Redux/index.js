import React from 'react';
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import iTunesReducers from '../Redux/Reducers/ITunesReducers'


/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  iTunesSearch: iTunesReducers,
})

const rootReducer = (state, action) => {
  return reducers(state, action)
}

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(rootReducer, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}
