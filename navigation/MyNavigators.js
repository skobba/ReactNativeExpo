/*

import { createSwitchNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

export const getRootNavigator = (loggedIn = false) => createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Loggin: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: loggedIn ? 'HomeScreen' : 'LoginScreen'
  }
);

*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Navigators
import { StackNavigator } from 'react-navigation'

// StackNavigator screens
import ItemList from './ItemList'
import Item from './Item'

