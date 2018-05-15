import { AsyncStorage } from 'react-native';
import { POST_STATUS } from '../actions/actionTypes';
import posts from '../../data/posts';

const postStatusReducer = (status = posts, action) => {
  switch (action.type) {
    case POST_STATUS: {
      AsyncStorage.setItem(
        'value',
        JSON.stringify([
          {
            time: action.time,
            status: action.status,
            attachment: action.attachment
          },
          ...status
        ])
      );
      return [
        {
          time: action.time,
          status: action.status,
          attachment: action.attachment
        },
        ...status
      ];
    }
    default:
      return status;
  }
};

export default postStatusReducer;
