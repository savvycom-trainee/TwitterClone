import { TabNavigator } from 'react-navigation';
import { Home, Search, Notifications, Message } from './tabs';

const Main = TabNavigator(
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

export default Main;
