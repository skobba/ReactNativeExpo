import React from 'react';
import { View, Text } from 'react-native';
import { 
    createStackNavigator, 
    createDrawerNavigator, 
    createBottomTabNavigator,
    withNavigation, 
    DrawerActions,
  } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => (
  <View style={{ flex: 1, marginTop: 0, alignItems: 'center', backgroundColor:'#ff0000', height:60 }} >
      
    <Text style={{ fontSize: 20, backgroundColor: '#fff00f' }}>Home Screens</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);


const RootDrawer = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 
      <Text>Mymoon</Text>,
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor, paddingTop: 20, }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Setting',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootDrawer;