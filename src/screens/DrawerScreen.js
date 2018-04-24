import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighLight,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BookmarkScreen,
  ProfileScreen,
  ListScreen,
  MomentScreen,
  AccountScreen
} from '../../Screens';
import * as d from '../../Constants';
import { DrawerButton } from '../components';

export default class DrawerScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.headerDrawer}>
            <Icon name="ios-contact-outline" size={50} />
            <TouchableOpacity onPress={() => navigation.navigate(AccountScreen)}>
              <Icon name="ios-more-outline" size={35} style={{ color: '#1CABE9' }} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 20 * d.width, marginBottom: 10 * d.height }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'huy'}</Text>
            <Text style={{ fontSize: 15, color: '#00000050' }}>{'@hoanghuy272'}</Text>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                paddingTop: 15 * d.height
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'6'}</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#00000050',
                  paddingLeft: 5 * d.width,
                  paddingRight: 10 * d.width
                }}
              >
                {'Following'}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'1'}</Text>
              <Text style={{ fontSize: 15, color: '#00000050', paddingLeft: 5 * d.width }}>
                {'Follower'}
              </Text>
            </View>
          </View>
          <View>
            <ScrollView>
              <View style={styles.bodyDrawer}>
                <DrawerButton
                  iconName="ios-person-outline"
                  text="Profile"
                  onPress={() => navigation.navigate(ProfileScreen)}
                />
                <DrawerButton
                  iconName="ios-list-box-outline"
                  text="Lists"
                  onPress={() => navigation.navigate(ListScreen)}
                />
                <DrawerButton
                  iconName="ios-bookmark-outline"
                  text="Bookmarks"
                  onPress={() => navigation.navigate(BookmarkScreen)}
                />
                <DrawerButton
                  iconName="ios-thunderstorm-outline"
                  text="Moments"
                  onPress={() => navigation.navigate(MomentScreen)}
                />
              </View>
              <View style={{ paddingTop: 10 * d.height }}>
                <DrawerButton
                  iconName={null}
                  text="Settings and privacy"
                  onPress={() => console.log('setting and privacy')}
                />
                <DrawerButton
                  iconName={null}
                  text="Help Center"
                  onPress={() => console.log('Help center')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.footerDrawer}>
          <TouchableOpacity>
            <Icon name="ios-moon-outline" size={30} style={{ color: '#1CABE9' }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ios-qr-scanner-outline" size={30} style={{ color: '#1CABE9' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 30 * d.height
    // paddingHorizontal: 20
  },
  headerDrawer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20 * d.width
    // paddingTop: 10 * d.height
  },
  bodyDrawer: {
    height: 240 * d.height,
    borderBottomWidth: 0.5,
    borderColor: '#00000050',
    paddingTop: 20 * d.height,
    paddingBottom: 10 * d.height
  },
  footerDrawer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15 * d.width,
    paddingBottom: 10 * d.height
  }
});
