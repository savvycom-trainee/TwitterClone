import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Moments extends Component {
  static navigationOptions = {
    drawerLabel: 'Moments',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="flash-on" size={35} color={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Text>Moments screen</Text>
      </View>
    );
  }
}
