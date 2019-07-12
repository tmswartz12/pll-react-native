import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import NewsScreen from '../screens/NewsScreen'
import ClubhouseScreen from '../screens/ClubhouseScreen'
import SettingsScreen from '../screens/SettingsScreen'
import IndividualTeam from '../components/IndividualTeam'
import IndividualPlayer from '../components/IndividualPlayer'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const NewsStack = createStackNavigator(
  {
    News: NewsScreen
  },
  config
)

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

NewsStack.path = ''

const ClubhouseStack = createStackNavigator(
  {
    Clubhouse: ClubhouseScreen,
    IndividualTeam: IndividualTeam,
    IndividualPlayer: IndividualPlayer
  },
  config
)

ClubhouseStack.navigationOptions = {
  tabBarLabel: 'Clubhouse',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
}

ClubhouseStack.path = ''

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  config
)

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  NewsStack,
  ClubhouseStack,
  SettingsStack
})

tabNavigator.path = ''

export default tabNavigator
