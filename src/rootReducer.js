import { v4 as uuidv4 } from "uuid"; // get uuid

const INITITAL_STATE = {
  todos: [
    { id: 1, todo: "shopping" },
    { id: 2, todo: "cleaning" },
  ],
}; // the original todos list

function rootReducer(state = INITITAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, { id: uuidv4(), todo: action.todo }],
    };
  }
  if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.id),
    };
  }
  return state;
}

export default rootReducer;
