import { combineReducers } from 'redux';
import postStatusReducer from './postStatusReducer';

const allReducers = combineReducers({
  postStatusReducer
});

export default allReducers;
