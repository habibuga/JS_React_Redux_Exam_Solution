import { connect } from 'react-redux';
import { addToDo } from '../redux/actions';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => ({
    addToDo: todo => dispatch(addToDo(todo)),
});

export default connect(undefined, mapDispatchToProps)(Form);
