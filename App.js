/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import AboutTwitter from './src/screens/AboutTwitter';
import ForgotPassword from './src/screens/ForgotPassword';
import Main from './src/screens/Main';
import Drawer from './src/screens/Drawer';

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);
    return (
      <View style={{ flex: 1 }}>
        <Stack />
      </View>
    );
  }
}

const Stack = StackNavigator({
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
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  DrawerScreen: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  }
});
