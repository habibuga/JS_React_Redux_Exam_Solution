import { connect } from 'react-redux';

import { addToDo } from '../redux/actions';

import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => ({
    addTodo: (payload) => dispatch(addToDo(payload)),
});

export default connect(undefined, mapDispatchToProps)(Form);
