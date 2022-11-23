const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";
const TODO_REMOVED = "TODO_REMOVED";

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
})

export {ADD_TODO, TODO_TOGGLED, TODO_REMOVED, addToDo, toggle, remove};
