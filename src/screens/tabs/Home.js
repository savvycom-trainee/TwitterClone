import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';

export class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" size={35} style={{ color: tintColor }} />
    ),
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" size={35} style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          onPressLeftIcon={() => {
            console.log('drawer pressed');
            this.props.navigation.navigate('DrawerOpen');
          }}
          centerHeader={<Text style={styles.centerHeaderStyle}>{'Home'}</Text>}
          rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
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
