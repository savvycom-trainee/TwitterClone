import { POST_STATUS } from './actionTypes';

const postStatusAction = (time, status, attachment) => ({
  type: POST_STATUS,
  time,
  status,
  attachment
});

export default postStatusAction;
