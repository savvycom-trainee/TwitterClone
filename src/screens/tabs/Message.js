import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';

export class Message extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-mail-outline" size={35} style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerHeader={<Text style={styles.centerHeaderStyle}>{'Messages'}</Text>}
          rightHeader={<Icon name="ios-mail-open-outline" size={35} style={{ color: '#1CABE9' }} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerHeaderStyle: {
    fontSize: 20,
    fontWeight: '700'
  }
});
