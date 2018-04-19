import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Lists extends Component {
  static navigationOptions = {
    drawerLabel: 'Lists',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="event-note" size={35} color={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Text>Lists screen</Text>
      </View>
    );
  }
}
