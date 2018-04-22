import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BookmarkScreen, ProfileScreen, ListScreen, MomentScreen } from '../../Screens';

export default class DrawerScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate(ProfileScreen)} style={styles.uglyDrawerItem}>
          Profile
        </Text>
        <Text onPress={() => navigation.navigate(ListScreen)} style={styles.uglyDrawerItem}>
          Lists
        </Text>
        <Text onPress={() => navigation.navigate(BookmarkScreen)} style={styles.uglyDrawerItem}>
          Bookmarks
        </Text>
        <Text onPress={() => navigation.navigate(MomentScreen)} style={styles.uglyDrawerItem}>
          Moments
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
});
