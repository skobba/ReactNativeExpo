import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Button } from 'react-native'
//import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Ionicons } from '@expo/vector-icons';

//import { MyButton } from '../components/MyButton'
import MyButton from '../components/MyButton'

import { AppAuth } from 'expo';


import {SecureStore} from 'expo';
import jwtDecode from 'jwt-decode'
import moment from 'moment'


//'clarity-icons-svg/core/cog-line.svg'

//import CogIcon  from 'clarity-icons-svg/core/cog-line.svg';


import SvgUri from "expo-svg-uri";

// import Svg, {
//   Use
// } from 'react-native-svg';

// import Svg from 'react-native-svg';

//import Logo from "./logo.svg";

import { Svg } from 'expo'

import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'

// const FEED_QUERY = gql`
//   query FeedQuery {
//     feed {
//       id
//       text
//       title
//       isPublished
//     }
//   }
// `

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = { 
    access_token: "init-access",
    refresh_token: "init-refresh",
    tokenResponseParsed: undefined
  }

  oauth_config = {
    issuer: 'https://accounts.lovogorden.no/auth/realms/lovogorden',
    clientId: 'lawreact',
    scopes: ['profile'],
  };

  access_token = "blah_blah_blah"

  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.handleRefreshToken = this.handleRefreshToken.bind(this);
    
  }

  async componentDidMount() {

    console.log("*** componentDidMount ***")

    this.access_token = await SecureStore.getItemAsync('access_token');
  }


  async componentDidUpdate() {
    console.log("*** componentDidUpdate ***")
  }

  handleClick(){
    alert('Button clicked!');
  }

  async getUserInfo() {

    fetch(
      //"https://accounts.lovogorden.no/auth/realms/lovogorden/protocol/openid-connect/userinfo",
      "https://api.lovogorden.no/api/clients",
      { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+this.state.access_token, 
          'Content-Type': 'application/x-www-form-urlencoded'
        }) 
      }
    )
    .then(response => response.json())
    .then((responseJson)=> {

      console.log("*** from API: " + JSON.stringify(responseJson, 0, 3))
/*       this.setState({
      loading: false,
      dataSource: responseJson
      }) */
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    

  }

  async handleRefreshToken(){
    //const access_token = await SecureStore.getItemAsync('access_token');
    //const refresh_token = await SecureStore.getItemAsync('refresh_token');

    console.log("*** this.state.refresh_token: " + this.state.refresh_token)

    const tokenResponse = await AppAuth.refreshAsync(this.oauth_config, this.state.refresh_token);
    console.log("*** tokenResponse: " + JSON.stringify(tokenResponse))


    //alert('Refresh Token: ' + access_token);
  }


  async handleLogin(){
    //alert('Log-in clicked!');

    const config = {
      issuer: 'https://accounts.lovogorden.no/auth/realms/lovogorden',
      clientId: 'lawreact',
      scopes: ['profile'],
      extras: {'access_type': 'offline'}
    };

    const tokenResponse = await AppAuth.authAsync(config);
    console.log("*** tokenResponse: " + JSON.stringify(tokenResponse))
    //console.log("*** tokenResponse (sorted): " + JSON.stringify(Object.keys(tokenResponse).sort()))

    //var highest = tokenResponse[ Object.keys(tokenResponse).sort().pop() ];
    //console.log("*** highest: " + JSON.stringify(highest,0,3))


    console.log("*** access_token: " + tokenResponse.accessToken)

    var fourthKey = Object.keys(tokenResponse).sort()[3];
    console.log("*** refresh_token: " + fourthKey)
    
    

    //var fourthValue = json[fourthKey];


    //let myBody = JSON.parse(tokenResponse)
    //console.log("*** myBody: " + myBody

    let tokenResponseParsed = jwtDecode(tokenResponse.accessToken)
    console.log("*** tokenResponseParsed: " + JSON.stringify(tokenResponseParsed))
    
    

    let access_token = tokenResponse.accessToken;

    this.setState({ 
      access_token: access_token,
      refresh_token: fourthKey,
      tokenResponseParsed: tokenResponseParsed
     });

    await SecureStore.setItemAsync('access_token', tokenResponse.accessToken);
    await SecureStore.setItemAsync('refresh_token', fourthKey);

    //this.forceUpdate();

    //const token = await SecureStore.getItemAsync('refresh_token');

//    console.log("*** access_token: " + JSON.stringify(tokenResponse.accessToken))
    //console.log("*** access_token: " + JSON.stringify(tokenResponse))
//    console.log(token); // output: sahdkfjaskdflas$%^&

  }

  render() {
    //const access_token = await SecureStore.getItemAsync('access_token');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Login Screen</Text>

            <Svg height={100} width={100}>
              <Svg.Circle
                cx={50}
                cy={50}
                r={45}
                strokeWidth={2.5}
                stroke="#e74c3c"
                fill="#f1c40f"
              />
              <Svg.Rect
                x={15}
                y={15}
                width={70}
                height={70}
                strokeWidth={2}
                stroke="#9b59b6"
                fill="#3498db"
              />

          <SvgUri
                width="200"
                height="200"
                source={{
                  uri: "http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                }}
              />

{/* 'clarity-icons-svg/core/cog-line.svg' */}

          {/* <SvgUri width="200" height="200" source={require("./img/homer-simpson.svg")} /> */}

          {/* <SvgUri width="200" height="200" source={require('clarity-icons-svg/core/cog-line.svg')} /> */}

            {/* <SvgUri
                width="200"
                height="200"
                source={{
                  uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
                }}
              />*/}

            </Svg> 
            
            <Ionicons name="md-checkmark-circle" size={32} color="green" />

{/*             <TabBarIcon
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
            /> */}


            <MyButton deleteAllItems={this.handleLogin} buttonText={"Log-in"}/>


            <MyButton deleteAllItems={this.handleRefreshToken} buttonText={"Refresh Token"}/>

            <MyButton deleteAllItems={this.getUserInfo} buttonText={"Get User Info"}/>


            <Button 
            onPress={this.handleClick}
            title="Log-in"
            //color="#841584"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />
          
         <Text style={styles.getStartedText}>{this.state.access_token.slice(-30)}</Text>

         <Text style={styles.getStartedText}>{this.state.refresh_token.slice(-30)}</Text>

         <Text style={styles.getStartedText}>{( this.state.tokenResponseParsed ? this.state.tokenResponseParsed.exp : "tomt")}</Text>

         <Text style={styles.getStartedText}>{( this.state.tokenResponseParsed ? moment(this.state.tokenResponseParsed.exp*1000).format("HH:mm:ss") : "tomt")}</Text>

         <Text style={styles.helpLinkText}>{JSON.stringify(this.state.tokenResponseParsed,0,2)}</Text>


{/*           <Button
              icon={{
                name: "ios-options",
                size: 15,
                color: "white"
              }}  
            onPress={this.handleClick}
            title="Log-in" 
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}

{/*             <Button
              icon={{
                name: "ios-options",
                size: 15,
                color: "white"
              }}
              title="Button with icon object"
              onPress={this.handleClick()}
            />
 */}
            <View style={[styles.codeHighlightContainer, styles.loginScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/LoginScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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
