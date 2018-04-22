import React, { Component } from 'react';
import { View, TouchableHighlight, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { addNewTask } from '../actions';

export default class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: ''
    };
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'tomato',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 64
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: 'white',
            borderWidth: 1,
            color: 'white'
          }}
          keyboardType="default"
          placeholderTextColor="white"
          placeholder="Enter task name"
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({ newTaskName: text });
          }}
        />
        <TouchableHighlight
          style={{ marginRight: 10 }}
          underlayColor="blue"
          onPress={event => {
            if (!this.state.newTaskName.trim()) {
              return;
            }
            //Call click event => use "Container"
            this.props.onClickAdd(this.state.newTaskName);
          }}
        >
          <Icon name="ios-add-circle-outline" size={35} />
        </TouchableHighlight>
      </View>
    );
  }
}
