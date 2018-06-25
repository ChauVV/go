import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'

import I18n from 'react-native-i18n'

export const isLogined = createReducer(init.isLogined, {
  [key.SET_LOGINED] (state, action) {
    return action.payload
  }
})
// SET REDUCER for Currency
export const currency = createReducer(init.currency, {
  [key.SET_CURRENCY] (state, action) {
    return action.payload
  }
})

// SET REDUCER for Language
export const language = createReducer(init.language, {
  [key.SET_LANGUAGE] (state, action) {
    I18n.locale = action.payload
    return action.payload
  }
})

export const internet = createReducer(init.internet, {
  [key.SET_INTERNET] (state, action) {
    I18n.locale = action.payload
    return action.payload
  }
})
