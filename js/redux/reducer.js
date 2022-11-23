import { combineReducers } from "redux";

import {ADD_TODO, TODO_TOGGLED, TODO_REMOVED} from "./actions";
import {stat} from "@babel/core/lib/gensync-utils/fs";

const todos = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_TODO: {
      return [...state, payload]
    }
    case TODO_TOGGLED: {
      return state.map(todo => {
        if (todo.title === payload) {
          todo.done = !todo.done;
        }})}
    case TODO_REMOVED: {
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
