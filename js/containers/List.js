import { connect } from 'react-redux';

import { toggle, remove } from '../redux/actions';

import List from '../components/List';

const selectTasks = (state, status) => {
    if (status === 'done') {
        return state.filter(t => t.done);
    }

    if (status === 'not-done') {
        return state.filter(t => !t.done);
    }

    return state;
}

const mapStateToProps = (state, ownProps) => ({
    items: selectTasks(state.todos, ownProps.match.params.filter),
});

const mapDispatchToProps = (dispatch) => ({
    toggle: (payload) => dispatch(toggle(payload)),
    remove: (payload) => dispatch(remove(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
