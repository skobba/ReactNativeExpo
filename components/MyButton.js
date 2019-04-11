import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

//import { MaterialIcons } from '@expo/vector-icons';
//import { lighterWhite } from '../utils/Colors';

import { Ionicons } from '@expo/vector-icons';

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
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      borderRadius: 10,
    },
    btnIcon: {
      height: 25,
      width: 25,
    },
    btnText: {
      fontSize: 18,
      color: '#FAFAFA',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 5,
    }
  });

const MyButton = ({ deleteAllItems }) => (
	<TouchableOpacity onPress={deleteAllItems} /* style={{backgroundColor: 'red'}} */ style={styles.btnClickContain}>
        {/* <MaterialIcons name="delete-sweep" size={24} color={lighterWhite} /> */}
        <Text style={styles.btnText}>Log-in</Text> 
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
	</TouchableOpacity>
);


export default MyButton;