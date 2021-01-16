import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import ScreenTrackingMiddleware from './ScreenTrackingMiddleware'
// import { appNavigatorMiddleware } from '../Navigation/ReduxNavigation'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */
  // middleware.push(appNavigatorMiddleware)

  /* ------------- Analytics Middleware ------------- */
  // middleware.push(ScreenTrackingMiddleware)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor =  null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}
