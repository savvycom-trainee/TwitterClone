import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';

const mapStateToProps = state => ({
  tasks: !state.taskReducers ? [] : state.taskReducers
});

export default connect(mapStateToProps)(TaskListComponent);
