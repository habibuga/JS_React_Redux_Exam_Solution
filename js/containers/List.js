import React from "react";
import { connect } from 'react-redux';
import { toggle, remove, removeDelayed } from '../redux/actions';
import List from '../components/List';

const mapStateToProps = ({todos}, ownProps) => ({
    todos: todos.filter(todo => {
        switch (ownProps.filter) {
            case undefined:
                return true;
            case "done":
                return todo.done;
            case "not-done":
                return  !todo.done;
            default:
                return false;
        }
    })
});

const mapDispatchToProps = (dispatch) => ({
    toggle: todo => dispatch(toggle(todo)),
    remove: todo => dispatch(remove(todo)),
    asyncRemove: todo => dispatch(removeDelayed(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
