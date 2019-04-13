import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
// import { ApolloClient } from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };


  async componentDidMount() {
    // try {
    //   await GoogleSignIn.initAsync({
    //     isOfflineEnabled: true,
    //     isPromptEnabled: true,
    //     clientId,
    //   });
    //   this._syncUserWithStateAsync();
    // } catch ({ message }) {
    //   alert('GoogleSignIn.initAsync(): ' + message);
    // }
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
  

  // Create the client as outlined in the setup guide
  //client = new ApolloClient();

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (

        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>

      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        //require('./assets/images/balance-outline.svg'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
