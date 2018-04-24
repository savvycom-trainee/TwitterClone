import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components/Header';
import * as d from '../../../Constants';
import { Card } from '../../components';
import { DrawerScreen } from '../../../Screens';

export class Account extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          leftHeader={
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: '#1CABE9',
                  paddingTop: 5 * d.height,
                  paddingBottom: 10 * d.height
                }}
              >
                {'Edit'}
              </Text>
            </TouchableOpacity>
          }
          centerHeader={<Text style={{ fontSize: 20, fontWeight: '700' }}>{'Accounts'}</Text>}
          rightHeader={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 18, color: '#1CABE9', paddingTop: 5 * d.height }}>
                {'Done'}
              </Text>
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={styles.bodyView}>
            <TouchableHighlight
              onPress={() => navigation.navigate(DrawerScreen)}
              underlayColor="#00000010"
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10 * d.width,
                  paddingTop: 10 * d.height
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    name="ios-contact-outline"
                    size={40}
                    style={{ marginRight: 10 * d.width }}
                  />
                  <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{'huy'}</Text>
                    <Text style={{ fontSize: 15, color: '#00000050' }}>{'@hoanghuy272'}</Text>
                  </View>
                </View>
                <Icon
                  name="ios-checkmark-circle"
                  size={25}
                  style={{ color: '#23A027', marginRight: 10 * d.width }}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log('create new account')}
              underlayColor="#00000010"
            >
              <View
                style={{
                  borderTopWidth: 0.5,
                  borderColor: '#00000050',
                  borderBottomWidth: 0.5,
                  height: 40 * d.height,
                  justifyContent: 'center',
                  marginLeft: 10 * d.width
                }}
              >
                <Text style={{ fontSize: 17, color: '#1CABE9' }}>{'Create a new account'}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log('add an new account')}
              underlayColor="#00000010"
            >
              <View
                style={{
                  height: 40 * d.height,
                  justifyContent: 'center',
                  marginLeft: 10 * d.width
                }}
              >
                <Text style={{ fontSize: 17, color: '#1CABE9' }}>{'Add an existing account'}</Text>
              </View>
            </TouchableHighlight>
          </View>
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
  bodyView: {
    borderTopWidth: 0.5,
    borderColor: '#00000050',
    borderBottomWidth: 0.5,
    elevation: 1,
    // flexDirection: 'row',
    width: d.fullWidth,
    // paddingTop: 10 * d.height,
    backgroundColor: '#FFFFFF'
  }
});
