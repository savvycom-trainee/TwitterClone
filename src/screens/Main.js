import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Home, Search, Notifications, Message } from './tabs';
import { Header } from '../components/';

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
      screen: Home,
      navigationOptions: {
        header: (
          <Header
            leftHeader={<Icon name="ios-contact-outline" size={35} />}
            centerHeader={
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700'
                }}
              >
                {'Home'}
              </Text>
            }
            rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
            onPressLeftIcon={() => this.props.navigation.navigate('DrawerOpen')}
          />
        )
      }
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
    }
    // initialRouteName: 'Notifications'
  }
);
