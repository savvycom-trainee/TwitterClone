import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Card } from '../../components';
import * as d from '../../../Constants';

export class Home extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" size={35} style={{ color: tintColor }} />
    ),
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" size={35} style={{ color: tintColor }} />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Header
          onPressLeftIcon={() => {
            console.log('drawer pressed');
            if (this.props.navigation.state.index === 0) {
              this.props.navigation.navigate('DrawerOpen');
            } else {
              this.props.navigation.navigate('DrawerClose');
            }
          }}
          centerHeader={<Text style={styles.centerHeaderStyle}>{'Home'}</Text>}
          rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
        />
        <ScrollView>
          {/* a absolute post view */}
          <Card>
            {/* avatar of the user */}
            <View style={styles.avaView}>
              {/* eslint-disable */}
              <Image
                source={require('../../assets/avaLogo/MarvelLogo.png')}
                style={styles.avaStyle}
              />
              {/* eslint-enable */}
            </View>
            <View style={styles.postView}>
              {/* information of the post */}
              <View style={styles.infoView}>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{'Marvel Entertainment'}</Text>
                </View>
                <View>
                  <Icon name="ios-checkmark-circle" size={18} style={{ color: '#1CABE9' }} />
                </View>
                <View>
                  <Text style={{ color: '#00000080' }}>@Mar...</Text>
                </View>
                <View>
                  <Text style={{ color: '#00000080' }}>• 17h</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {}}>
                    <Icon name="ios-arrow-down-outline" size={18} style={{ color: '#00000060' }} />
                  </TouchableOpacity>
                </View>
              </View>
              {/* content of the status */}
              <View style={styles.statusView}>
                <Text style={{ fontSize: 15, fontWeight: '400' }}>
                  {
                    'Thanks for joining us tonight, Agents! 💥 Be sure to tune in next Friday for a brand new episode of "Marvel\'s #AgentsofSHIELD" at 9/8c on ABC.'
                  }
                </Text>
              </View>
              {/* image or video attachment */}
              <View style={styles.attachmentView}>
                {/* eslint-disable */}
                <Image
                  source={require('../../assets/images/Marvel1.png')}
                  style={{ width: 290 * d.width, height: 180 * d.height, borderRadius: 15 }}
                />
                {/* eslint-enable */}
              </View>
              {/* react features */}
              <View style={styles.reactView}>
                {/* eslint-disable */}
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Image
                    source={require('../../assets/icons/Comment.png')}
                    style={styles.reactIconStyle}
                  />
                  <Text style={{ fontSize: 12 }}>22</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 30, flexDirection: 'row', marginTop: 5 }}>
                  <Image
                    source={require('../../assets/icons/Retweet.png')}
                    style={styles.reactIconStyle}
                  />
                  <Text style={{ fontSize: 12 }}>71</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 30, flexDirection: 'row', marginTop: 5 }}>
                  <Image
                    source={require('../../assets/icons/Heart.png')}
                    style={styles.reactIconStyle}
                  />
                  <Text style={{ fontSize: 12 }}>825</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 30, flexDirection: 'row' }}>
                  <Icon
                    name="ios-cloud-upload-outline"
                    size={25}
                    style={{ color: '#000000', marginBottom: 5 }}
                  />
                </TouchableOpacity>
                {/* eslint-enable */}
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEEF2'
  },
  centerHeaderStyle: {
    fontSize: 20,
    fontWeight: '700'
  },
  avaView: {
    paddingRight: 10,
    flex: 1
  },
  avaStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  postView: {
    // marginRight: 10,
    paddingRight: 10,
    flex: 6
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statusView: {},
  attachmentView: {
    marginTop: 12,
    marginBottom: 7
  },
  reactView: {
    flexDirection: 'row'
  },
  reactIconStyle: {
    width: 16,
    height: 16,
    marginRight: 5
  }
});
