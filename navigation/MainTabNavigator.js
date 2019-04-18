import React from 'react';
import { Platform, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TimeScreen from '../screens/TimeScreen';
import ClientsScreen from '../screens/ClientsScreen';
import ClientsScreenTest from '../screens/ClientsScreenTest';
import ClientScreen from '../screens/ClientScreen';
import NewClientScreen from '../screens/NewClientScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FlatListDemo from '../screens/FlatListDemo';
import MatterScreen from '../screens/MatterScreen';
import NavigationScreen from '../screens/NavigationScreen';

import { Image } from 'react-native';
import Colors from '../constants/Colors';
import NavitaionScreen from '../screens/NavigationScreen';

import { Header } from 'react-native-elements';

// Navigators
import { StackNavigator } from 'react-navigation'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Hjem',
  tabBarIcon: ({ focused }) => (

    <Image
      source={require('../assets/images/law256.png')}
      fadeDuration={0}
      style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

  ),
};

const LoginStack = createStackNavigator({
  Auth: TimeScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Timer',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/hourglass75.png')}
      fadeDuration={0}
      style={{width: 25, height: 25, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const ClientsStack = createStackNavigator({
  Clients: ClientsScreenTest,
  Client: ClientScreen,
  NewClient: NewClientScreen,
  }, {
    initialRouteName: 'Clients',
});



ClientsStack.navigationOptions = {
  tabBarLabel: 'Klienter',
  tabBarIcon: ({ focused }) => (

    <Image
      source={require('../assets/images/users80.png')}
      fadeDuration={0}
      style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

  ),
};


const MattersStack = createStackNavigator({
  Matters: MatterScreen,
});

MattersStack.navigationOptions = {
  tabBarLabel: 'Saker',
  tabBarIcon: ({ focused }) => (

    <Image
      source={require('../assets/images/matter80.png')}
      fadeDuration={0}
      style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};


/******************** Settings Navigation *****************/
// StackNavigator screens
import ItemList from '../components/ItemList'
import Item from '../components/Item'

const Stack = createStackNavigator({
  ItemList: ItemList,
    Item: Item,
  }, {
    initialRouteName: 'ItemList',
  });

const SettingsStack = createStackNavigator({
  Home: {
    screen: Stack, 
    navigationOptions: {
        header: null,
    },
  }
});


SettingsStack.navigationOptions = {
  
  tabBarLabel: 'Settings',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  tabBarIcon: ({ focused }) => (

    <Image
      source={require('../assets/images/cog80.png')}
      fadeDuration={0}
      style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};


export default createBottomTabNavigator(
  {
    HomeStack,
    ClientsStack,
    MattersStack,
    LoginStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);