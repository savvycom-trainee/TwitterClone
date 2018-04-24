import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from '../../components';
import * as d from '../../../Constants';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* a absolute post view */}
        <TouchableOpacity
          activeOpacity={0.5}
          underlayColor="#00000010"
          onPress={() => {
            console.log('comment pressed');
            this.setState({ activeIndex: this.props.index });
          }}
        >
          <Card>
            <View style={{ flexDirection: 'row' }}>
              {/* avatar of the user */}
              <TouchableOpacity
                activeOpacity={0.5}
                underlayColor="#00000010"
                onPress={() => console.log('ava pressed')}
              >
                <View style={styles.avaView}>
                  {/* eslint-disable */}
                  <Image source={this.props.item.ava} style={styles.avaStyle} />
                  {/* eslint-enable */}
                </View>
              </TouchableOpacity>
              <View style={styles.postView}>
                {/* information of the post */}
                <View style={styles.infoView}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 5 * d.width }}>
                      {this.props.item.name}
                    </Text>
                    {this.props.item.tick && (
                      <Icon
                        name="ios-checkmark-circle"
                        size={18}
                        style={{ color: '#1CABE9', marginRight: 5 * d.width }}
                      />
                    )}
                    <Text style={{ color: '#00000080' }}>@{this.props.item.tag} </Text>
                    <Text style={{ color: '#00000080' }}>• {this.props.item.time}</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => {}}>
                      <Icon
                        name="ios-arrow-down-outline"
                        size={18}
                        style={{ color: '#00000060' }}
                      />
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
            </View>
          </Card>
        </TouchableOpacity>
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
