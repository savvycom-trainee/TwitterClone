import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Card } from '../../components';
import * as d from '../../../Constants';
import posts from '../../../data/posts';

class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* a absolute post view */}
        <Card>
          {/* avatar of the user */}
          <View style={styles.avaView}>
            {/* eslint-disable */}
            <Image source={this.props.item.ava} style={styles.avaStyle} />
            {/* eslint-enable */}
          </View>
          <View style={styles.postView}>
            {/* information of the post */}
            <View style={styles.infoView}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{this.props.item.name}</Text>
              </View>
              <View>
                <Icon name="ios-checkmark-circle" size={18} style={{ color: '#1CABE9' }} />
              </View>
              <View>
                <Text style={{ color: '#00000080' }}>@{this.props.item.tag}</Text>
              </View>
              <View>
                <Text style={{ color: '#00000080' }}>• {this.props.item.time}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="ios-arrow-down-outline" size={18} style={{ color: '#00000060' }} />
                </TouchableOpacity>
              </View>
            </View>
            {/* content of the status */}
            <View style={styles.statusView}>
              <Text style={{ fontSize: 15, fontWeight: '400' }}>{this.props.item.status}</Text>
            </View>
            {/* image or video attachment */}
            {this.props.item.attachment && (
              <View style={styles.attachmentView}>
                <Image
                  source={this.props.item.attachment}
                  style={{ width: 290 * d.width, height: 180 * d.height, borderRadius: 15 }}
                />
              </View>
            )}
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
                <Icon name="ios-cloud-upload-outline" size={25} style={{ color: '#000000' }} />
              </TouchableOpacity>
              {/* eslint-enable */}
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

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
      <View style={{ flex: 1 }}>
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
        <FlatList
          data={posts}
          renderItem={({ item, index }) => <HomeView item={item} index={index} />}
          keyExtractor={item => item.status}
        />
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
    paddingRight: 10 * d.width,
    flex: 1
  },
  avaStyle: {
    height: 50 * d.height,
    width: 50 * d.width,
    borderRadius: 25
  },
  postView: {
    // marginRight: 10,
    paddingRight: 10 * d.width,
    flex: 6
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attachmentView: {
    marginTop: 12 * d.height,
    marginBottom: 7 * d.height
  },
  reactView: {
    flexDirection: 'row'
  },
  reactIconStyle: {
    width: 16 * d.width,
    height: 16 * d.height,
    marginRight: 5 * d.width
  }
});
