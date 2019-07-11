import React from 'react'
import { ExpoConfigView } from '@expo/samples'

export default class SettingsScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('headerTitle', 'A Nested Details Screen'),
      headerBackTitle: null
    }
  }

  render() {
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId', 'NO-ID')
    console.log('iteamId', itemId)
    return <ExpoConfigView />
  }
}

// SettingsScreen.navigationOptions = {}
