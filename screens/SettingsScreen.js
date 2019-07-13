import React from 'react'
import { ExpoConfigView } from '@expo/samples'

export default class SettingsScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('headerTitle', 'Settings'),
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }

  render() {
    const { navigation } = this.props

    return <ExpoConfigView />
  }
}

// SettingsScreen.navigationOptions = {}
