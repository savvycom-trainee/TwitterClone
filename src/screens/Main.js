import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import Home from './tabs/Home';
// import Search from './tabs/Search';
// import Notifications from './tabs/Notifications';
// import Message from './tabs/Message';
import { Home, Search, Notifications, Message } from './tabs';

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator>
          <View>
            <Text>Main Screen</Text>
          </View>
        </MainNavigator>
      </View>
    );
  }
}

const MainNavigator = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Search: {
      screen: Search
    },
    Notifications: {
      screen: Notifications
    },
    Message: {
      screen: Message
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#FAFBFC',
        borderTopWidth: 1
      },
      activeTintColor: '#1CABE9'
    },
    initialRouteName: 'Notifications'
  }
);
