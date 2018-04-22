import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import * as d from '../../../Constants';

export class Search extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search-outline" size={35} style={{ color: tintColor }} />
    )
  };

  searchIcon = () => <Icon name="ios-search-outline" size={20} />;

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerHeader={
            <TextInput
              style={styles.textInputStyle}
              placeholder={'Search Twitter'}
              placeholderTextColor="#75808E"
            />
          }
          rightHeader={
            <Icon name="ios-person-add-outline" size={35} style={{ color: '#1CABE9' }} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInputStyle: {
    backgroundColor: '#00000008',
    fontSize: 16,
    width: 270,
    height: 30,
    borderRadius: 20,
    paddingLeft: 80 * d.width
  }
});
