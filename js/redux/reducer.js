import { combineReducers } from "redux";

import {ADD_TODO, TODO_TOGGLED, TODO_REMOVED, TODO_REMOVED_DELAYED} from "./actions";

const todos = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_TODO: {
      return [...state, {title: payload, done: false}]
    }
    case TODO_TOGGLED:
      let newState = [...state];
      newState.forEach(todo => {
        if (todo.title === payload) {
          todo.done = !todo.done
        }
      })
      return newState;
    case TODO_REMOVED: {
      return state.filter(todo => todo.title !== payload)
    }
    case TODO_REMOVED_DELAYED: {
      return state.filter(todo => todo.title !== payload)
    }
    default: {
      return state
    }
  }
};

export default combineReducers({
  todos
});
