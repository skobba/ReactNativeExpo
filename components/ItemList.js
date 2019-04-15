//import React, { Component } from 'react'
import React from 'react';

import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native'

const items = [
    { name: 'one'},
    { name: 'two'},
    { name: 'three'},
    { name: 'four'},
  ]
  
  class ItemList extends React.Component {
  
    // static navigationOptions = {
    //   title: 'Stack'
    // }
  
    static navigationOptions = {
        title: 'Settings',
    };

    constructor(props) {
        super(props)
    }

    renderItem = (item, i) => {
      return (
        <TouchableOpacity
          key={i}
          style={styles.item}
          onPress={() => this.props.navigation.navigate('Item', { title: item.name })}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>)
    }
  
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{`Settings!`}</Text>
          {items.map(this.renderItem)}
        </View>

        // <View style={styles.container}>
        //     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        //         <View style={styles.welcomeContainer}>
        //             <Image
        //             source={
        //                 __DEV__
        //                 ? require('../assets/images/robot-dev.png')
        //                 : require('../assets/images/robot-prod.png')
        //             }
        //             style={styles.welcomeImage}
        //             />
        //         </View>

        //         <View style={styles.getStartedContainer}>

        //             <Text style={styles.getStartedText}>NavigationScreen</Text>
                    
        //         </View>
        //     </ScrollView>
        // </View>

        )
    }
  }

  export default ItemList

  const styles2 = StyleSheet.create({
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
    homeScreenFilename: {
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
    shadowColor: 'black',
    shadowOffset: { height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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

  
  const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#2980b9',
    //   },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2980b9',
      padding: 20,
    },
    text: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    },
    item: {
      padding: 10,
    },
    itemText: {
      color: 'white',
      fontSize: 20,
    }
  })