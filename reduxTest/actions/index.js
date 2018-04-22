import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';

let newTaskId = 0;

export const addNewTask = inputTaskName => ({
  type: ADD_NEW_TASK,
  taskId: newTaskId++,
  taskName: inputTaskName
});

export const toggleTask = taskId => ({
  type: TOGGLE_ONE_TASK,
  taskId
});
