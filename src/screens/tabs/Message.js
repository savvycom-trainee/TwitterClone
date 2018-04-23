import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';

export class Message extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftHeader={<Icon name="ios-contact-outline" size={35} />}
        centerHeader={<Text style={{ fontSize: 20, fontWeight: '700' }}>{'Messages'}</Text>}
        rightHeader={<Icon name="ios-mail-open-outline" size={35} style={{ color: '#1CABE9' }} />}
        onPressLeftIcon={() => navigation.navigate('DrawerOpen')}
      />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-mail-outline" size={35} style={{ color: tintColor }} />
    )
  });

  render() {
    return <View style={styles.container} />;
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
