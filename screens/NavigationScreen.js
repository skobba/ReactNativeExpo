import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import{ScrollView, StyleSheet,View,ActivityIndicator,FlatList,Text,TouchableOpacity,Image} from "react-native";
import MyButton from '../components/MyButton';

import { ListItem } from 'react-native-elements'
import { Card, Avatar, Icon } from 'react-native-elements';

import MatterScreen from './MatterScreen';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

import { createStackNavigator } from 'react-navigation';


// StackNavigator screens
import ItemList from '../components/ItemList'
import Item from '../components/Item'





export default class NavigationScreen extends React.Component {
  static navigationOptions = {
    title: 'Navigation',
  };



  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);



  }


  

  render() {

    return (
    
      <View style={styles.container}>
        <Text style={styles.getStartedText}>NavigationScreen</Text>
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

