import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import * as d from '../../../Constants';

export class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftHeader={<Icon name="ios-contact-outline" size={35} />}
        centerHeader={
          <TextInput
            style={{
              backgroundColor: '#00000008',
              fontSize: 16,
              width: 270,
              height: 30,
              borderRadius: 20,
              paddingLeft: 80 * d.width
            }}
            placeholder={'Search Twitter'}
            placeholderTextColor="#75808E"
          />
        }
        rightHeader={<Icon name="ios-person-add-outline" size={35} style={{ color: '#1CABE9' }} />}
        onPressLeftIcon={() => navigation.navigate('DrawerOpen')}
      />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search-outline" size={35} style={{ color: tintColor }} />
    )
  });

  searchIcon = () => <Icon name="ios-search-outline" size={20} />;

  render() {
    return <View style={styles.container} />;
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
