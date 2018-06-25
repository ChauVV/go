import { Navigation } from 'react-native-navigation'
import images from 'assets/Image'
import {
  setLogined
} from 'controller/Redux/actions/globalActions'

export const goNext = () => {
  console.log('goNext: ', true)
  return (dispatch, getState) => {
    dispatch(setLogined(true))
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Love',
          screen: 'Screen1',
          title: 'Screen One',
          icon: images.ic_like,
          selectedIcon: images.ic_like_selected
        },
        {
          label: 'Location',
          screen: 'Screen2',
          title: 'Screen Two',
          icon: images.ic_placeholder,
          selectedIcon: images.ic_placeholder_selected
        },
        {
          label: 'Network',
          screen: 'Screen3',
          title: 'Screen Two',
          icon: images.ic_network,
          selectedIcon: images.ic_network_selected
        }
      ]
    })
  }
}
