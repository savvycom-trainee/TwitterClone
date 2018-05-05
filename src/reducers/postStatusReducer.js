import { POST_STATUS } from '../actions/actionTypes';
import posts from '../../data/posts';

const postStatusReducer = (status = posts, action) => {
  switch (action.type) {
    case POST_STATUS:
      return [
        {
          time: action.time,
          status: action.status,
          attachment: action.attachment
        },
        ...status
      ];
    default:
      return status;
  }
};

export default postStatusReducer;
