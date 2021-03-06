import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Profile extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="person-outline" size={35} color={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Text>Profile screen</Text>
      </View>
    );
  }
}
