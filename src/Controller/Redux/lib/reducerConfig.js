import store from 'react-native-simple-store'
import { KEYSTORE } from 'utils/globalConstants'
import RNSecureKeyStore from 'react-native-secure-key-store'

export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const checkStore = async (data, KEYSTOREDATA) => {
  store.save(KEYSTOREDATA, data)
}

export const checkLocalStoreToRedux = async (storeRedux, keyStoreNew, action, initData) => {
  let data = await store.get(keyStoreNew)
  console.log('check store')
  if (keyStoreNew === KEYSTORE.CARDDATA) {
    if (data) {
      await RNSecureKeyStore.set(KEYSTORE.CARDDATA, JSON.stringify(data))
      store.delete(KEYSTORE.CARDDATA)
    } else {
      await RNSecureKeyStore.get(KEYSTORE.CARDDATA)
        .then((res) => {
          data = JSON.parse(res)
        }, () => {
          data = []
        })
    }
  }

  let typeOfData = typeof (initData)

  if (typeOfData === 'string' || typeOfData === 'number') {
    console.log('is string: ', data && data !== initData)
    data && data !== initData && storeRedux.dispatch(action(data))
  } else if (typeOfData === 'boolean') {
    console.log('is boolean: ', data === true)
    data === true && storeRedux.dispatch(action(data))
  } else if (typeOfData === 'object') {
    if (Array.isArray(initData)) {
      data === null
        ? storeRedux.dispatch(action(initData))
        : data.length > 0 && storeRedux.dispatch(action(data))
    } else {
      typeof (data) === 'object' && storeRedux.dispatch(action(data))
    }
  }
}
