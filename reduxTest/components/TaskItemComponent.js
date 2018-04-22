import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TaskItemComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => {}} />
        <Text style={{ margin: 20, color: this.props.completed === true ? 'green' : 'black' }}>
          {this.props.taskName}
        </Text>
      </View>
    );
  }
}
