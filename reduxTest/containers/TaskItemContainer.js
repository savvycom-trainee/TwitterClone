import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

export default connect()(TaskItemComponent);
