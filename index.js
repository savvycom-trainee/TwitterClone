import React, { AppRegistry } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reduxTest/reducers/index';
import TaskManagerComponent from './reduxTest/components/TaskManagerComponent';
import App from './App';
import AbsolutePost from './src/screens/Tweet/AbsolutePost';

const store = createStore(allReducers);
const ReduxApp = () => (
  <Provider store={store}>
    <TaskManagerComponent />
  </Provider>
);

AppRegistry.registerComponent('Twitter', () => App);
