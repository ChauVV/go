
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

export default class view extends Component {
  render () {
    const { goNext } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => goNext()}>
          Welcome, touch me!
        </Text>
      </View>
    )
  }
}
