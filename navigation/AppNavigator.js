import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import ClubhouseScreen from '../screens/ClubhouseScreen'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Settings: SettingsScreen,
    Clubhouse: ClubhouseScreen
  })
)
