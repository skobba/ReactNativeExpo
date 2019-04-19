import React from 'react';
import { Platform, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

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
import { StackNavigator, DrawerActions } from 'react-navigation'

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import RootDrawerScreen from '../screens/RootDrawerScreen';

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



/******************** Clients Navigation *****************/
// https://github.com/react-navigation/react-navigation/issues/131

// const MyStack = {
// 	FirstView: {
// 		screen: ClientsScreenTest
// 	},
// 	SecondView: {
// 		screen: ClientsScreenTest
// 	},
// 	ThirdView: {
// 		screen: ClientsScreenTest
// 	}
// };

// const DrawerRoutes = {
// 	FirstViewStack: {
// 		name: 'FirstViewStack',
// 		screen: createStackNavigator(MyStack, { initialRouteName: 'FirstView' })
// 	},
// 	SecondViewStack: {
// 		name: 'SecondViewStack',
// 		screen: createStackNavigator(MyStack, { initialRouteName: 'SecondView' })
// 	},
// 	ThirdViewStack: {
// 		name: 'ThirdViewStack',
// 		screen: createStackNavigator(MyStack, { initialRouteName: 'ThirdView' })
// 	},
// };
  
// const ClientsStack = createStackNavigator({
//   Drawer: {
//     name: 'Drawer',
//     screen: createDrawerNavigator(
//       DrawerRoutes,
//     ),
//   },
//   ...MyStack
// },
//   {
//     headerMode: 'none'
//   });


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

// const ClientsStack = createStackNavigator({
//   Clients: ClientsScreenTest,
//   Client: ClientScreen,
//   NewClient: NewClientScreen,
//   }, {
//     initialRouteName: 'Clients',
// });



// ClientsStack.navigationOptions = {
//   tabBarLabel: 'Klienter',
//   tabBarIcon: ({ focused }) => (

//     <Image
//       source={require('../assets/images/users80.png')}
//       fadeDuration={0}
//       style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />

//   ),
// };


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


/******************** Settings Navigation *****************/
// StackNavigator screens
import ItemList from '../components/ItemList'
import Item from '../components/Item'

// const Stack = createStackNavigator({
//   ItemList: ItemList,
//     Item: Item,
//   }, {
//     initialRouteName: 'ItemList',
// });

// const Stack = createStackNavigator({
//   SettingsScreen: SettingsScreen,
//   }, {
//     initialRouteName: 'SettingsScreen',
// });


const SettingsStack = createStackNavigator({
  Home: {
    screen: RootDrawerScreen, 
    navigationOptions: {
      header: props => (
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      )
        
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

/******************** Settings Navigation (2) *****************/
// const Screen2_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Second: {
//     screen: Screen2,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 2',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// SettingsStack = createDrawerNavigator({
//   //Drawer Optons and indexing
//   Screen1: {
//     //Title
//     screen: Screen1,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 1',
//     },
//   },
//   Screen2: {
//     //Title
//     screen: Screen2,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 2',
//     },
//   },
// });

// SettingsStack.navigationOptions = {
  
//   tabBarLabel: 'Settings',
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   tabBarIcon: ({ focused }) => (

//     <Image
//       source={require('../assets/images/cog80.png')}
//       fadeDuration={0}
//       style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
//       color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   ),
// };


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