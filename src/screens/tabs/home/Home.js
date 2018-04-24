import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../../components';
import posts from '../../../../data/posts';
import HomeView from './HomeView';

export class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        leftHeader={<Icon name="ios-contact-outline" size={35} />}
        centerHeader={
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700'
            }}
          >
            {'Home'}
          </Text>
        }
        rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
        onPressLeftIcon={() => navigation.navigate('DrawerOpen')}
      />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home-outline" size={35} style={{ color: tintColor }} />
    )
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={posts}
          renderItem={({ item, index }) => (
            <HomeView navigation={this.props.navigation} item={item} activeIndex={index} />
          )}
          keyExtractor={item => item.status}
        />
      </View>
    );
  }
}
