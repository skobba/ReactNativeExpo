import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import{ScrollView, StyleSheet,View,ActivityIndicator,FlatList,Text,TouchableOpacity,Image} from "react-native";
import MyButton from '../components/MyButton';

import { ListItem } from 'react-native-elements'
import { Card, Avatar, Icon } from 'react-native-elements';

import Store from '../screens/Store';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };


  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return (
    
      
    <View>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            //leftAvatar={{ source: { uri: l.avatar_url } }}

            // leftAvatar={
            //   <Avatar
            //   rounded
            //   icon={{name: 'user', type: 'font-awesome'}}
            //   onPress={() => console.log("Works!")}
            //   activeOpacity={0.7}
            //   containerStyle={{marginLeft: 0, marginTop: 0}}
              
            // />
            // }


            leftIcon={
              //<Icon name={'chevron-right'} size={20}/>
              <Image
                source={require('../assets/images/client75.png')}
                fadeDuration={0}
                style={{width: 26, height: 26}}
              />
            }


            // rightIcon={
            //   //<Icon name={'chevron-right'} size={20}/>
            //   <Image
            //     source={require('../assets/images/client75.png')}
            //     fadeDuration={0}
            //     style={{width: 26, height: 26}}
            //   />
            // }

            chevronColor="white"
            chevron

            title={l.name}
            subtitle={l.subtitle}
            onPress={() => this.goToOtherScreen("Home")}
            //ViewComponent={Store}
          />
        //   <Avatar
        //   key={Math.floor((Math.random() * 100))}
        //   small
        //   rounded
        //   icon={{name: 'user', type: 'font-awesome'}}
        //   onPress={() => console.log("Works!")}
        //   activeOpacity={0.7}
        //   containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
        // />
        ))


      }





    <ListItem
        key={"Auth"}
        leftIcon={
          // <Icon name={'ios-log-in'} size={20}/>
          <Image
          source={require('../assets/images/login80.png')}
          fadeDuration={0}
          style={{width: 26, height: 26}}
        />
        }
        chevronColor="white"
        chevron

        title={"Auth"}
        subtitle={"Login, logout and div tools"}
        onPress={() => this.goToOtherScreen("Auth")}
        //ViewComponent={Store}
      />

      <ListItem
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        //ViewComponent={Store} // Only if no expo
        leftAvatar={{ rounded: true, source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        title="Chris Jackson"
        titleStyle={{ color: 'white', fontWeight: 'bold' }}
        subtitleStyle={{ color: 'white' }}
        subtitle="Vice Chairman"
        chevronColor="white"
        chevron
        onPress={() => this.goToOtherScreen("Home")}
/>

    </View>

      // <View style={styles.container}>
      //   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      //     <View style={styles.getStartedContainer}>

      //       <Text style={styles.getStartedText}>
      //         Change this text and your app will automatically reload.
      //       </Text>

      //       <MyButton deleteAllItems={this.handleLogin} buttonText={"Log-in"}/>

      //     </View>

      //   </ScrollView>

      // </View>

    
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

