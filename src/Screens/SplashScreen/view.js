
import store from 'react-native-simple-store'
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import images from 'assets/Image'
import { KEYSTORE } from 'utils/globalConstants'
import styles from './styles'

export default class view extends Component {
  constructor (props) {
    super(props)
    props.setThis(this)
  }
  componentDidMount () {
    setTimeout(async () => {
      let isLogined = await store.get(KEYSTORE.LOGINED)
      if (isLogined) {
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
      } else {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Welcome', // unique ID registered with Navigation.registerScreen
            title: 'Welcome', // title of the screen as appears in the nav bar (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
          }
        })
      }
    }, 2000)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Splash Screen
        </Text>
      </View>
    )
  }
}
