import React from 'react';
import { 
  StyleSheet, 
  View, 
  Button,
  TextInput
 } from 'react-native';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

const TextInputField = ({ label, value, error, handleChange }) => (
  <View>
    <Input
      label={label}
      value={value}
      onChangeText={handleChange}
      errorMessage={error}
    />
  </View>
);

const ClientMutation = gql`
mutation (
  $name: String!
  $address: String
  $email: String
) {
createClient(clientInput: {
  name: $name,
  address: $address,
  email: $email
}) {
  _id
  name
  address
  email
}
}
`;

export default class NewClientScreen extends React.Component {
  constructor(props) {
    super(props)

    
    console.log("*** props.navigation.state.params.title: " + props.navigation.state.params.title);//JSON.stringify(props,0,2))
  }

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

  saveClient = (values) => {
    console.log(values);

    const fullname = values.lastname + ", " + values.firstname;

    createClient({ 
      variables: {
        name: fullname,
        address: "Bærum",
        email: "une@skobba.net"
      },
      update: (store, { data: { createClient } } ) => {
        console.log("*** imperative update with graphql: " + JSON.stringify(createClient, 0 ,5))
        this.props.updateStoreAfterCreateClient(store, createClient)
        
      }

    }).then(clientResult => {
      console.log("*** client created with graphql!")
      //console.log("*** client created with graphql: " + JSON.stringify(clientResult, 0 ,5))
      //this.props.handler(clientResult)
    })
    .catch((err) => {
      console.log("*** ERROR - createClient: " + err)
    });






  }

  render() {
    return (

      <Mutation mutation={ClientMutation}>
        {(createClient, { data }) => (

          <Formik
            initialValues={{ firstname: '', lastname: '' }}
            onSubmit={values => {
              //this.saveClient(values)
              const fullname = values.lastname + ", " + values.firstname;

              createClient({ 
                variables: {
                  name: fullname,
                  address: "Bærum",
                  email: "une@skobba.net"
                },
                update: (store, { data: { createClient } } ) => {
                  console.log("*** imperative update with graphql: " + JSON.stringify(createClient, 0 ,5))
                  this.props.updateStoreAfterCreateClient(store, createClient)
                  
                }
          
              }).then(clientResult => {
                console.log("*** client created with graphql!")
                //console.log("*** client created with graphql: " + JSON.stringify(clientResult, 0 ,5))
                //this.props.handler(clientResult)
              })
              .catch((err) => {
                console.log("*** ERROR - createClient: " + err)
              });


            }}
          >
            {props => (
              <View>
                <TextInput
                  onChangeText={props.handleChange('firstname')}
                  onBlur={props.handleBlur('firstname')}
                  value={props.values.firstname}
                />
                <TextInput
                  onChangeText={props.handleChange('lastname')}
                  onBlur={props.handleBlur('lastname')}
                  value={props.values.lastname}
                />
                <Button onPress={props.handleSubmit} title="Submit" />
              </View>
            )}

          </Formik>
        
        )}
      </Mutation>



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


