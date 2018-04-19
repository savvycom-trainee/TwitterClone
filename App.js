/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import AboutTwitter from './src/screens/AboutTwitter';
import ForgotPassword from './src/screens/ForgotPassword';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    );
  }
}

const Navigator = StackNavigator({
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
  }
});
