import { connect } from 'react-redux';
import AddComponent from '../components/AddComponent';
import { addNewTask } from '../actions';

const MapStateToProps = state => ({
  a: state.taskReducers
});

const MapDispatchToProps = dispatch => ({
  onClickAdd: inputTaskName => dispatch(addNewTask(inputTaskName))
});

export default connect(MapStateToProps, MapDispatchToProps)(AddComponent);
