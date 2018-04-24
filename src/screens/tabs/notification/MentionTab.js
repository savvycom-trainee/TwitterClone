import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MentionTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Nothing to see hear -- yet'}</Text>
          <Text
            style={{
              fontSize: 16,
              color: '#00000060',
              width: 320,
              marginTop: 10,
              textAlign: 'center'
            }}
          >
            {"When someone mentions you, you'll find it here."}
          </Text>
        </View>
      </View>
    );
  }
}
