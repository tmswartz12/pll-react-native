import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import PulseScreen from '../screens/PulseScreen'
import ClubhouseScreen from '../screens/ClubhouseScreen'
import SettingsScreen from '../screens/SettingsScreen'
import IndividualTeam from '../components/IndividualTeam'
import IndividualPlayer from '../components/IndividualPlayer'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const PulseStack = createStackNavigator(
  {
    Pulse: PulseScreen
  },
  config
)

PulseStack.navigationOptions = {
  tabBarLabel: 'Pulse',
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: 'black' // TabBar background
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-pulse${focused ? '' : ''}` : 'md-pulse'
      }
    />
  )
}

PulseStack.path = ''

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
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: 'black' // TabBar background
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
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
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: 'black' // TabBar background
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  PulseStack,
  ClubhouseStack,
  SettingsStack
})

tabNavigator.path = ''

export default tabNavigator
