import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from '../../../components';
import * as d from '../../../../Constants';
import { AbsolutePostScreen } from '../../../../Screens';
import styles from './styles';

export default class AllTab extends Component {
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
        <TouchableOpacity
          activeOpacity={0.5}
          underlayColor="#00000010"
          onPress={() => {
            console.log('card pressed');
            this.setState({ activeIndex: this.props.index });
            navigation.navigate(AbsolutePostScreen, { activeIndex: this.props.activeIndex });
          }}
        >
          <Card>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 2 }}>
                {/* eslint-disable */}
                <Image
                  source={require('../../../assets/images/TwitterLogo.png')}
                  style={{
                    width: 30 * d.width,
                    height: 30 * d.height,
                    alignSelf: 'flex-end',
                    marginRight: 15 * d.width
                  }}
                />
                {/* eslint-enable */}
              </View>
              <View style={{ flex: 7, marginRight: 15 * d.width }}>
                <View style={styles.headerNotiView}>
                  <Image source={this.props.item.ava} style={styles.imageStyle} />
                  <Icon name="ios-arrow-down-outline" size={18} style={{ color: '#00000060' }} />
                </View>
                <View style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 14 }}>{this.props.item.notiStatus}</Text>
                </View>
                <View>
                  <Text style={{ color: '#00000060', fontSize: 14 }}>{this.props.item.status}</Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
