/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, YellowBox, Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import AboutTwitter from './src/screens/AboutTwitter';
import ForgotPassword from './src/screens/ForgotPassword';
import Main from './src/screens/Main';
import DrawerScreen from './src/screens/DrawerScreen';
import { Bookmarks, Lists, Moments, Profile } from './src/screens/drawerTabs';
import { Home } from './src/screens/tabs';

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
    return (
      <View style={{ flex: 1 }}>
        <AppContent />
      </View>
    );
  }
}

const DrawerNavigation = DrawerNavigator(
  {
    Main: { screen: Main },
    Home: { screen: Home },
    Bookmarks: { screen: Bookmarks },
    Lists: { screen: Lists },
    Moments: { screen: Moments },
    Profile: { screen: Profile }
  },
  {
    contentComponent: DrawerScreen
  }
);

const drawerButton = navigation => (
  <Text
    style={{ padding: 5, color: 'white' }}
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen');
      } else {
        navigation.navigate('DrawerClose');
      }
    }}
  >
    Menu
  </Text>
);

const Drawer = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    }
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation)
    })
  }
);

const AppContent = StackNavigator(
  {
    Main: {
      screen: Main
    },
    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: 'none'
    // navigationOptions: ({ navigation }) => ({
    //   headerStyle: { backgroundColor: '#4C3E54' },
    //   title: 'Welcome!',
    //   headerTintColor: 'white',
    //   gesturesEnabled: false,
    //   headerLeft: drawerButton(navigation)
    // })
  }
);

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
    screen: AppContent,
    navigationOptions: {
      header: null
    }
  }
});
