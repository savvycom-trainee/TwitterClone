import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer';

export default class TaskListComponent extends Component {
  render() {
    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({ item, index }) => <TaskItemContainer {...item} />}
        keyExtractor={(item, index) => item.taskName}
      />
    );
  }
}
