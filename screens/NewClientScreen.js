import React from 'react';
import { 
  StyleSheet, 
  View, 
  Button,
  TextInput
 } from 'react-native';
import { Formik } from 'formik';

export default class NewClientScreen extends React.Component {
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
    let headerTitleStyle = {color: '#f00'}
    let headerRightStyle = {color: '#f00'}
    let headerTintColor = '#f00';
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
      <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View>
          <TextInput
            onChangeText={props.handleChange('email')}
            onBlur={props.handleBlur('email')}
            value={props.values.email}
          />
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
    );
  }
}



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


