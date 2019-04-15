import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


import gql from 'graphql-tag';
//import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';

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


const ClientsComponent = graphql(GET_CLIENTS)(props => {
  const { error, clients } = props.data;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (clients) {
    return (
    <Text>{JSON.stringify(clients, 0, 2)}</Text>
    )
  }

  return <Text>Loading...</Text>;
});


export default class ClientsScreen extends React.Component {
  static navigationOptions = {
    title: 'Klienter', 
  };


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
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
        <ClientsComponent />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
