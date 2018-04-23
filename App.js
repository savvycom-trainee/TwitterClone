/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, YellowBox, Text } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Main from './src/screens/Main';
import DrawerScreen from './src/screens/DrawerScreen';
import { Home, Search, Notifications, Message } from './src/screens/tabs';
import { AboutTwitter, ForgotPassword, Login, SignUp, Welcome } from './src/screens/start';

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
    return (
      <View style={{ flex: 1 }}>
        <DrawerNavigation />
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
    }
    // initialRouteName: 'Notifications'
  }
);

const Stack = StackNavigator(
  {
    WelcomeScreen: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    SignUpScreen: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    AboutTwitterScreen: {
      screen: AboutTwitter,
      navigationOptions: {
        header: null
      }
    },
    ForgotPasswordScreen: {
      screen: ForgotPassword,
      navigationOptions: {
        header: null
      }
    },
    MainScreen: {
      screen: MainNavigator
    }
  },
  {
    initialRouteName: 'MainScreen'
  }
);
const DrawerNavigation = DrawerNavigator(
  {
    Stack: { screen: Stack },
    Main: { screen: Main },
    Drawer: { screen: DrawerScreen }
  },
  {
    contentComponent: DrawerScreen
  }
);
