import store from 'react-native-simple-store'

export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const checkStore = async (data, KEYSTORE_DATA) => {
  store.save(KEYSTORE_DATA, data)
}

export const checkLocalStoreToRedux = async (storeRedux, keyStore, action, initData) => {
  const data = await store.get(keyStore)
  const temp = data || initData

  storeRedux.dispatch(action(temp))
}
