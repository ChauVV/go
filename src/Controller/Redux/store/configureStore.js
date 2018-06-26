'use strict'

import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'

// Root action reducer
import rootReducer from '../reducers'
// Root action saga
import rootSaga from '../actionSaga/rootSaga'

const sagaMiddleWare = createSagaMiddleWare()
const middleWare = [sagaMiddleWare]
middleWare.push(thunkMiddleware)

if (process.env['NODE_ENV'] === 'development') {
  middleWare.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))

sagaMiddleWare.run(rootSaga)

export default store
