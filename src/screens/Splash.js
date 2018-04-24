import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Splash extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1CABE9',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Icon name="logo-twitter" size={55} color="#FFFFFF" />
      </View>
    );
  }
}
