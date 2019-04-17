import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TouchableHighlight, 
  View, 
  ListView,
  Button
 } from 'react-native';
 import gql from 'graphql-tag';
 import { SwipeListView } from 'react-native-swipe-list-view';
 import { Query } from 'react-apollo';

 import { Image } from 'react-native';

const GET_CLIENTS = gql`
query {
   clients {
     _id
     name
     address
     updatedAt
   }
 }
 `;

export default class ClientsScreenTest extends React.Component {

  ds = undefined;
  
  constructor(props) {
    super(props)
    this.ds =  new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  static navigationOptions = ({ navigation }) => {

    let headerTitle = 'Klienter';
    //let headerBackTitle = "< Tilbake";
    //let headerLeft = (<Button style={{color: 'white', tintColor: 'white', fontSize: 10}} title='Edit' onPress={_ => console.log('*** Add new client!')}>Ny</Button>)
    let headerRight = (
      <View>
              <Button 
      style={{color: '#fff', tintColor: 'white',fontSize: 10}} 
      title='Ny'
      color='#000'
      onPress={_ => navigation.navigate('NewClient', { title: "Ny klient!" })}></Button>

{/* <Image
      source={require('../assets/images/hourglass75.png')}
      fadeDuration={0}
      style={{width: 25, height: 25, tintColor: '#fff'}}
      color='#fff'
    /> */}
      </View>



    )
    let headerStyle = {color: '#fff', backgroundColor: '#ddd', fontSize: 10}
    let headerTitleStyle = {color: '#000'}
    let headerRightStyle = {color: '#000'}
    let headerTintColor = '#000';

    return { 
      headerTitle, 
      //headerBackTitle,
      //headerLeft,
      headerRight, 
      headerStyle, 
      headerTitleStyle, 
      headerRightStyle, 
      headerTintColor
    }
  }

  addPressed = () => {
    console.log("*** Add new client")
  }

  render() {

    return (

      <Query query={GET_CLIENTS}>

        {({ data: { clients }, loading }) => {

          if (loading || !clients) {
            return <Text>Loading ...</Text>;
          }

          //return <Text>{JSON.stringify(clients, 0, 2)}</Text>; 

          return ( 
            <SwipeListView
              dataSource={this.ds.cloneWithRows(clients)}
              
              renderRow={data => (
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Client', { title: data.name })}
                  style={styles.rowFront}
                  underlayColor={'#AAA'}>
                  <View>
                    <Text>Klient: {data.name}</Text>
                  </View>
                </TouchableHighlight>
              )}
              renderHiddenRow={(data, secId, rowId, rowMap) => (
                <View style={styles.rowBack}>
                  <Text>Left</Text>
                  <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                    <Text style={styles.backTextWhite}>Right</Text>
                  </View>
                  <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Text style={styles.backTextWhite}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={75}
              rightOpenValue={-150}
            /> 
          );

        }}

      </Query>

    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  addButton: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30,
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#8BC645',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    width: 100,
  },
});


