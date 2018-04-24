import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import posts from '../../../data/posts';
import Post from './Post';
import comments from '../../../data/comments';
import Comment from '../Tweet/Comment';

export default class AbsolutePost extends Component {
  render() {
    const { navigation } = this.props;
    const activeIndex = navigation.state.params ? navigation.state.params.activeIndex : null;
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftHeader={
            <Icon
              name="ios-arrow-back-outline"
              size={35}
              style={{ color: '#1CABE9' }}
              onPressLeftIcon={() => navigation.goBack()}
            />
          }
          centerHeader={<Text style={{ fontSize: 18, fontWeight: '800' }}> {'Tweet'}</Text>}
          rightHeader={<Icon name="ios-add-outline" size={35} style={{ color: '#1CABE9' }} />}
        />
        <FlatList
          data={[posts[activeIndex]]}
          renderItem={({ item, index }) => <Post item={item} index={index} />}
          keyExtractor={item => item.status}
        />
        <FlatList
          data={comments}
          renderItem={({ item, index }) => <Comment item={item} index={index} />}
          keyExtractor={item => item.status}
        />
      </View>
    );
  }
}
