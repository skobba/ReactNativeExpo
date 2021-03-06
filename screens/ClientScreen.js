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
import { ExpoLinksView } from '@expo/samples';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

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

export default class ClientScreen extends React.Component {
  constructor(props) {
    super(props)

    
    console.log("*** props.navigation.state.params.title: " + props.navigation.state.params.title);//JSON.stringify(props,0,2))
  }
  
  // static navigationOptions = {
  //   title: 'Klienter', 
  //   headerStyle:{ backgroundColor: '#FFF'},
  //   headerTitleStyle:{ color: 'green'},
  //   // header: ({params}) => {
  //   //   right:
  //   //   <Button
  //   //   title = "Test"
  //   //   onPress = {() => this.params.handleSave() } />
  //   // }
  // };

  static navigationOptions = ({ navigation }) => {

    console.log("*** navigation.state.params.title: " + navigation.state.params.title);//JSON.stringify(props,0,2))


    //let headerTitle = 'Klienter3';
    let headerTitle = navigation.state.params.title;
    let headerBackTitle = "< Tilbake";
    //let headerLeft = (<Button style={{color: 'white', tintColor: 'white', fontSize: 10}} title='Edit' onPress={_ => console.log('*** Add new client!')}>Ny</Button>)
    //let headerRight = (<Button style={{color: 'white', tintColor: 'white',fontSize: 10}} title='Ny' onPress={_ => console.log('*** Add new client!')}>Ny</Button>)
    let headerStyle = {backgroundColor: '#ddd', fontSize: 10}
    let headerTitleStyle = {color: '#000'}
    let headerRightStyle = {color: '#000'}
    let headerTintColor = '#000';
    return { 
      headerTitle, 
      //headerLeft,
      headerBackTitle,
      //headerRight, 
      headerStyle, 
      headerTitleStyle, 
      headerRightStyle, 
      headerTintColor
    }
  }

  addPressed = () => {
    console.log("*** Add new client")
  }


  state = {
    creating: false,
    goToCreatedClient: false,
    createClient: null,
    events: [],
    isLoading: false,
    selectedEvent: null
  };

  render() {
    return (
      <Text>ClientSceen!</Text>
    );
  }
}



const ClientComponent = graphql(GET_CLIENTS)(props => {
  this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  this.state = {
    basic: true,
    listViewData: Array(20).fill('').map((_, i) => `item #${i}`),
  };

  const { error, clients } = props.data;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (clients) {
    return (
    //<Text>{JSON.stringify(clients, 0, 2)}</Text>

    
      <SwipeListView
      dataSource={this.ds.cloneWithRows(clients)}
      renderRow={data => (
        <TouchableHighlight
          onPress={_ => console.log('You touched me')}
          style={styles.rowFront}
          underlayColor={'#AAA'}>
          <View>
            <Text>I am {data.name} in a SwipeListView</Text>
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


    // <View style={styles.standalone}>
    //   <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
    //     <View style={styles.standaloneRowBack}>
    //       <Text style={styles.backTextWhite}>Left</Text>
    //       <Text style={styles.backTextWhite}>Right</Text>
    //     </View>
    //     <View style={styles.standaloneRowFront}>
    //       <Text>I am a standalone SwipeRow</Text>
    //     </View>
    //   </SwipeRow>
    // </View>
    )
  }

  return <Text>Loading...</Text>;
});




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


