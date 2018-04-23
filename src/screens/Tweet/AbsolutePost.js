import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import posts from '../../../data/posts';
import Post from './Post';

export default class AbsolutePost extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post item={item} />}
          keyExtractor={item => item.status}
        />
      </View>
    );
  }
}
