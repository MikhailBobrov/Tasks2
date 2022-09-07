import { defaultState } from "./index";
import { statusOfPriority } from "./constant";

const ADD_TODO = "ADDTODO";
const REMOVE_TODO = "REMOVETODO";
const UPDATE_TODO = "UPDATETODO";
const COMPLETE_TODO = "СOMPLETETODO";
const SORT_TODO = "SORTTODO";
const CHANGE_PRIORITY = "CHANGE_PRIORITY";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TODO: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              item: action.payload.item,
            };
          }
          return todo;
        }),
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: true,
            };
          }
          return todo;
        }),
      };
    }
    case SORT_TODO: {
      const sortedData = state.tasks.sort(
        (a, b) =>
          statusOfPriority[a.statusOfPriority] -
          statusOfPriority[b.statusOfPriority]
      );
      console.log(sortedData);
      return {
        ...state,
        tasks: [...sortedData],
      };
    }
    case CHANGE_PRIORITY: {
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              statusOfPriority: action.payload.statusOfPriority,
            };
          }
          return todo;
        }),
      };
    }
    default:
      return state;
  }
};

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload });
export const updateTodoAction = (payload) => ({ type: UPDATE_TODO, payload });
export const completeTodoAction = (payload) => ({
  type: COMPLETE_TODO,
  payload,
});
export const sortTodoAction = (payload) => ({ type: SORT_TODO, payload });
export const changeTodoPriorityAction = (payload) => ({
  type: CHANGE_PRIORITY,
  payload,
});
