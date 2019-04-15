import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TimeScreen from '../screens/TimeScreen';
import ClientsScreen from '../screens/ClientsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FlatListDemo from '../screens/FlatListDemo';
import MatterScreen from '../screens/MatterScreen';
import NavigationScreen from '../screens/NavigationScreen';

import { Image } from 'react-native';
import Colors from '../constants/Colors';
import NavitaionScreen from '../screens/NavigationScreen';

// Navigators
import { StackNavigator } from 'react-navigation'

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Hjem',
  tabBarIcon: ({ focused }) => (

    // <TabBarIcon
    //   focused={focused}
    //   name={
    //     Platform.OS === 'ios'
    //     ? `ios-information-circle${focused ? '' : '-outline'}`
    //     : 'md-information-circle'
    //   }
    // />

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
    // <TabBarIcon
    //   focused={focused}
    //   name={
    //     Platform.OS === 'ios'
    //       ? `ios-log-in`
    //       : 'md-log-in'
    //   }
    // />
  ),
};

const LinksStack = createStackNavigator({
  Links: ClientsScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Klienter',
  tabBarIcon: ({ focused }) => (

    <Image
      source={require('../assets/images/users80.png')}
      fadeDuration={0}
      style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

    // <TabBarIcon
    //   focused={focused}
    //   name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    // />
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

// const Stack = createStackNavigator({
//   Home: HomeScreen,
//   Login: LoginScreen,
// }, {
//   initialRouteName: 'Login',
// });

const SettingsStack = createStackNavigator({
  Home: {
    screen: Stack, 
    navigationOptions: {
        header: null,
    },
  }
});


// const SettingsStack = createStackNavigator({
//   Settings: Stack,
// });

SettingsStack.navigationOptions = {
  
  tabBarLabel: 'Settings',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  tabBarIcon: ({ focused }) => (

    // <Image
    //   source={require('../assets/images/matter80.png')}
    //   fadeDuration={0}
    //   style={{width: 25, height: 25}}
    // />

    <Image
      source={require('../assets/images/cog80.png')}
      fadeDuration={0}
      style={{width: 26, height: 26, tintColor: (focused ? Colors.tabIconSelected : Colors.tabIconDefault)}}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

    //style={[styles.PNGImageStyle, {tintColor: this.state.myDynamicColor}]}

    // <Icon.Ionicons
    //   name={this.props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    // />

    // <TabBarIOS.Item
    //   icon={require('../assets/images/matter80.png')}
    //   title="Chat"
    // />

    // <TabBarIcon
    //   focused={focused}
    //   name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    // />
  ),
};


// export default createBottomTabNavigator({
//   HomeStack,
//   LoginStack,
//   LinksStack,
//   SettingsStack,
// });


export default createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    MattersStack,
    LoginStack,
    SettingsStack,
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //       // Sometimes we want to add badges to some icons. 
    //       // You can check the implementation below.
    //       IconComponent = HomeIconWithBadge; 
    //     } else if (routeName === 'Settings') {
    //       iconName = `ios-options`;
    //     }

    //     // You can return any component that you like here!
    //     return <IconComponent name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);