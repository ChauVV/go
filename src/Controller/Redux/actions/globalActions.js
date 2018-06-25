import key from '../lib/constants'
import { checkStore } from '../lib/reducerConfig'
import { KEYSTORE } from 'utils/globalConstants'
// import { txtDefault, txtJapan } from 'utils/globalStyles'
// import { setCustomText } from 'react-native-global-props'

export function setLogined (isLogined) {
  checkStore(isLogined, KEYSTORE.LOGINED)
  return {
    type: key.SET_LOGINED,
    payload: isLogined
  }
}

export function setLanguage (language) {
  checkStore(language, KEYSTORE.LANGUAGE)
  // language === HBLOCALE.JP
  //   ? setCustomText({style: txtJapan})
  //   : setCustomText({style: txtDefault})
  return {
    type: key.SET_LANGUAGE,
    payload: language
  }
}

export function setCurrency (currency) {
  checkStore(currency, KEYSTORE.CURRENCY)
  return {
    type: key.SET_CURRENCY,
    payload: currency
  }
}

export function setInternet (internet) {
  checkStore(internet, KEYSTORE.INTERNET)
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}
