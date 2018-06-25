import * as globalReducers from './globalReducers'
// import * as sagaReducers from './sagaReducers'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ...globalReducers
  // ...sagaReducers
})

export default rootReducer
