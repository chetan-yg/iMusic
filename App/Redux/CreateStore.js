import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ScreenTrackingMiddleware from './ScreenTrackingMiddleware'
// import { appNavigatorMiddleware } from '../Navigation/ReduxNavigation'

const persistConfig = {
  key: 'root',
  whitelist: [
    'iTunesSearch',
  ],
  storage: AsyncStorage,
}

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
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createAppropriateStore(persistedReducer, compose(...enhancers))
  let persistor = persistStore(store)
  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware,
    persistor
  }
}
