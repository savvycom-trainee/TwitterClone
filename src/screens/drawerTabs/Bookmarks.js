import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Bookmarks extends Component {
  static navigationOptions = {
    drawerLabel: 'Bookmarks',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="bookmark-border" size={35} color={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Text>Bookmarks screen</Text>
      </View>
    );
  }
}
