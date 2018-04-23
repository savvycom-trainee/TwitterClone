import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Header } from '../../components';
import * as d from '../../../Constants';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftHeader={<Icon name="ios-arrow-back-outline" size={35} style={{ color: '#1CABE9' }} />}
          centerHeader={<Text style={{ fontSize: 18, fontWeight: '800' }}> {'Tweet'}</Text>}
          rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
        />
        <Card>
          <View style={styles.infoView}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={this.props.item.ava} style={styles.avaStyle} />
              <View style={{ marginLeft: 10 * d.width }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                  {this.props.item.name}{' '}
                  {this.props.item.tick && (
                    <Icon
                      name="ios-checkmark-circle"
                      size={18}
                      style={{
                        color: '#1CABE9'
                      }}
                    />
                  )}
                </Text>
                <Text style={{ fontSize: 15, color: '#00000070' }}>@{this.props.item.tag}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name="ios-arrow-down-outline"
                size={18}
                style={{ color: '#00000060', marginRight: 12 * d.width }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: '300' }}>{this.props.item.status}</Text>
            {this.props.item.attachment && (
              <View style={styles.attachmentView}>
                <Image
                  source={this.props.item.attachment}
                  style={{ width: 350 * d.width, height: 180 * d.height, borderRadius: 15 }}
                />
              </View>
            )}
            <Text style={{ fontSize: 14, color: '#00000050' }}>{this.props.item.specificTime}</Text>
          </View>
          <View style={styles.tweetReactNumView}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'513'}</Text>
            <Text style={styles.tweetReactNumStyle}>{'Retweets'}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{'3340'}</Text>
            <Text style={styles.tweetReactNumStyle}>{'Likes'}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 5 * d.height
            }}
          >
            {/* eslint-disable */}
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Comment.png')}
                style={styles.reactIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Retweet.png')}
                style={styles.reactIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/Heart.png')}
                style={styles.reactIconStyle}
              />
            </TouchableOpacity>
            {/* eslint-enable */}
            <TouchableOpacity>
              <Icon name="ios-cloud-upload-outline" size={25} style={{ color: '#000000' }} />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEEF2'
  },
  avaStyle: {
    height: 50 * d.height,
    width: 50 * d.width,
    borderRadius: 25
  },
  attachmentView: {
    marginTop: 12 * d.height,
    marginBottom: 7 * d.height
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10 * d.height
  },
  tweetReactNumView: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#00000050',
    marginRight: 10 * d.width,
    marginTop: 10 * d.height,
    paddingTop: 10 * d.height,
    paddingBottom: 10 * d.height
  },
  tweetReactNumStyle: {
    fontSize: 14,
    color: '#00000070',
    paddingLeft: 5 * d.width,
    paddingRight: 5 * d.width
  },
  reactIconStyle: {
    width: 16 * d.width,
    height: 16 * d.height,
    marginRight: 5 * d.width
  }
});
