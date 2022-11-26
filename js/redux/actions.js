const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";
const TODO_REMOVED = "TODO_REMOVED";
const TODO_REMOVED_DELAYED = "TODO_REMOVED_DELAYED";

const addToDo = (payload) => ({
    type: ADD_TODO,
    payload: payload
});

const toggle = (payload) => ({
    type: TODO_TOGGLED,
    payload: payload
});

const remove = (payload) => ({
    type: TODO_REMOVED,
    payload: payload
});

const asyncRemove = (payload) => ({
    type: TODO_REMOVED_DELAYED,
    payload: payload
})

const removeDelayed = (todo) => dispatch => {
    dispatch(asyncRemove)
    setTimeout(() => dispatch(remove(todo)), 2000);
}

export {ADD_TODO, TODO_TOGGLED, TODO_REMOVED, TODO_REMOVED_DELAYED, addToDo, toggle, remove, removeDelayed, asyncRemove};
