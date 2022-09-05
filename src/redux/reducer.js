import { defaultState } from "./index";

const ADD_TODO = "ADDTODO";
const REMOVE_TODO = "REMOVETODO";
const UPDATE_TODO = "UPDATETODO";
const COMPLETE_TODO = "OMPLETETODO";

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
          if (todo.id === action.payload) {
            return {
              ...todo,
              item: action.payload.item,
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
