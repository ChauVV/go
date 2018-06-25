import { Navigation } from 'react-native-navigation'
import { KEYSTORE } from 'utils/globalConstants'

import storeRedux from 'controller/Redux/store/configureStore'
import * as actions from 'controller/Redux/actions/globalActions'
// import * as actionsSaga from '#/Redux/actionSaga/sagaActions'
import init from 'controller/Redux/lib/initState'
import { checkLocalStoreToRedux } from 'controller/Redux/lib/reducerConfig'
import { Provider } from 'react-redux'

import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Screen3 from './Screens/Screen3'
import Screen4 from './Screens/Screen4'
import SplashScreen from './Screens/SplashScreen'
import Welcome from './Screens/Welcome'

export default () => {
  Navigation.registerComponent('SplashScreen', () => SplashScreen, storeRedux, Provider)
  Navigation.registerComponent('Welcome', () => Welcome, storeRedux, Provider)
  Navigation.registerComponent('Screen1', () => Screen1, storeRedux, Provider)
  Navigation.registerComponent('Screen2', () => Screen2, storeRedux, Provider)
  Navigation.registerComponent('Screen3', () => Screen3, storeRedux, Provider)
  Navigation.registerComponent('Screen4', () => Screen4, storeRedux, Provider)

  checkLocalStoreToRedux(storeRedux, KEYSTORE.LOGINED, actions.setLogined, init.isLogined)
  checkLocalStoreToRedux(storeRedux, KEYSTORE.LANGUAGE, actions.setLanguage, init.currency)
  checkLocalStoreToRedux(storeRedux, KEYSTORE.CURRENCY, actions.setCurrency, init.language)
  checkLocalStoreToRedux(storeRedux, KEYSTORE.INTERNET, actions.setInternet, init.internet)

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'SplashScreen',
      title: 'Welcome',
      navigatorStyle: {},
      navigatorButtons: {}
    }
  })
}
