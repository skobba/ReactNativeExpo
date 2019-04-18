import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Button,
  TextInput,
  SegmentedControlIOS,
  TouchableOpacity,
  ScrollView
 } from 'react-native';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

//import { object as yupObject, string as yupString } from "yup";
let yup = require('yup');

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

          <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          

          <Formik
            initialValues={{ firstname: '', lastname: '' }}
            onSubmit={values => {
              //this.saveClient(values)
              const fullname = values.lastname + ", " + values.firstname;

              console.log("*** createClient: " + fullname)
              return;

              createClient({ 
                variables: {
                  name: fullname,
                  address: "Bærum",
                  email: "une@skobba.net"
                },
                update: (store, { data: { createClient } } ) => {
                  //console.log("*** imperative update with graphql: " + JSON.stringify(createClient, 0 ,5))
                  //this.props.updateStoreAfterCreateClient(store, createClient)
                  
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
            validationSchema={
              yup.object().shape({
                firstname: yup
                 .string()
                 .min(2)
                 .required(),
                lastname: yup
                 .string()
                 .min(2)
                 .required(),
                 
             })}
          >
            
            {({ values, handleChange, handleBlur, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
              <View>
                {/* <SegmentedControlIOS values={['Person', 'Firma', 'Organisasjon']} /> */}

                <SegmentedControlIOS 
                  tintColor="#D7D7D5"
                  tintColor="#000"
                  style={styles.SegmentedControlIOS}
                  values={['Person', 'Firma', 'Org', 'Stat']}
                  selectedIndex={0}
                  onChange={this._onChange}
                  onValueChange={(val) =>{
                  this.setState({
                  value:val
                  })
                }}/>    

                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                  placeholder="Fornavn"
                />
                {touched.firstname && errors.firstname &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.firstname}</Text>
                }

                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
                  placeholder="Etternavn"
                />
                {touched.lastname && errors.lastname &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.lastname}</Text>
                }


                {/* <Button disabled={!isValid} style={styles.saveButton} onPress={handleSubmit} title="Submit" />

                <Button
                  onPress={""}
                  title="Learn More"
                  color="#fff00"
                  accessibilityLabel="Learn more about this purple button"
                /> */}

                { isValid && 
                  <TouchableOpacity onPress={handleSubmit} style={styles.btnClickContain}>
                    <Button
                      onPress={""}
                      title="Opprett klient"
                      color="#fff00"
                      accessibilityLabel="Learn more about this purple button"
                      onPress={handleSubmit}
                    />
                  </TouchableOpacity>
                }



              </View>
            )}

          </Formik>
          </ScrollView>
          </View>
        
        )}
      </Mutation>



    );
  }
}



const styles = StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#009D6E',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  saveButton: {
    color: '#000000',
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    marginTop: 4,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 4,
    spacing: 4,
    marginTop: 4,
  },
  addButton: {
    fontSize: 27,
    //color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    color: '#000000',
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


