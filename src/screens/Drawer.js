import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Bookmarks, Lists, Moments, Profile } from './drawerTabs';
import { Home } from './tabs';

export default class Drawer extends Component {
  render() {
    return (
      <View>
        <DrawerTab>
          <Text>Drawer Navigator</Text>
        </DrawerTab>
      </View>
    );
  }
}

const DrawerTab = DrawerNavigator({
  Bookmarks: {
    screen: Bookmarks
  },
  Lists: {
    screen: Lists
  },
  Moments: {
    screen: Moments
  },
  Profile: {
    screen: Profile
  },
  Home: {
    screen: Home
  }
});
