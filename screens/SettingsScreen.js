import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import{ScrollView, StyleSheet,View,ActivityIndicator,FlatList,Text,TouchableOpacity,Image} from "react-native";
import MyButton from '../components/MyButton';

import { ListItem } from 'react-native-elements'
import { Card, Avatar, Icon, Header } from 'react-native-elements';

import MatterScreen from './MatterScreen';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

import { 
  createStackNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator,
  withNavigation, 
  DrawerActions,
} from 'react-navigation';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default class SettingsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }


  static navigationOptions = {
    title: 'Settings',
    header: props => (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => props.navigation.navigate('Item', { title: 'Mine' }) }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
};

  DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
      //Title
      screen: Screen1,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    Screen2: {
      //Title
      screen: Screen2,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
  });

  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    console.log("*** togglerDrawer")
    //Props to open/close the drawer
    //this.props.navigation.toggleDrawer();
    //this.props.navigation.toggleDrawer() 
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  };

  render() {

    return (
    <View>
       <Text style={styles.getStartedText}>
         Drawer menu demo
       </Text>

       <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon name={'menu'} size={25}/>

          {/* <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          /> */}
        </TouchableOpacity>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  loginScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

