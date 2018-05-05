/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, YellowBox } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './src/reducers/index';
import Main from './src/screens/Main';
import DrawerScreen from './src/screens/DrawerScreen';
import { Search, Notifications, Message, PostStatus, Home } from './src/screens/Tabs';
import { AboutTwitter, ForgotPassword, Login, SignUp, Welcome } from './src/screens/Start';
import { Profile, Lists, Bookmarks, Moments, Account } from './src/screens/DrawerTabs';
import AbsolutePost from './src/screens/Tweet/AbsolutePost';
import Splash from './src/screens/Splash';

class Twitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: true
    };
    setTimeout(() => {
      this.setState({ screen: false });
    }, 100);
  }

  render() {
    YellowBox.ignoreWarnings(['Remote debugger is in a background tab']);
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
    return <View style={{ flex: 1 }}>{this.state.screen ? <Splash /> : <DrawerNavigation />}</View>;
  }
}

const store = createStore(allReducers);
const App = () => (
  <Provider store={store}>
    <Twitter />
  </Provider>
);

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
    },
    PostStatusScreen: {
      screen: PostStatus,
      navigationOptions: {
        header: null
      }
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
    contentComponent: DrawerScreen,
    initialRouteName: 'Stack'
  }
);

export default App;
