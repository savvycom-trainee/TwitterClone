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
import { Profile, Lists, Bookmarks, Moments, Account } from './src/screens/drawerTabs';
import AbsolutePost from './src/screens/Tweet/AbsolutePost';
import Splash from './src/screens/Splash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: true
    };
    setTimeout(() => {
      this.setState({ screen: false });
    }, 2000);
  }

  render() {
    YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
    return <View style={{ flex: 1 }}>{this.state.screen ? <Splash /> : <DrawerNavigation />}</View>;
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
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
    },
    ListScreen: {
      screen: Lists,
      navigationOptions: {
        header: null
      }
    },
    BookmarkScreen: {
      screen: Bookmarks,
      navigationOptions: {
        header: null
      }
    },
    MomentScreen: {
      screen: Moments,
      navigationOptions: {
        header: null
      }
    },
    AccountScreen: {
      screen: Account,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    NotificationScreen: {
      screen: Notifications,
      navigationOptions: {
        header: null
      }
    },
    AbsolutePostScreen: {
      screen: AbsolutePost,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    // initialRouteName: 'MainScreen'
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
    // initialRouteName: 'Drawer'
  }
);
