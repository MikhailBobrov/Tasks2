import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { status, statusOfPriority } from "../redux/constant";
import {
  removeTodoAction,
  updateTodoAction,
  completeTodoAction,
  sortTodoAction,
  changeTodoPriorityAction,
} from "../redux/reducer";

export const DisplayTodos = (props) => {
  const tasksData = useSelector((state) => state.tasks);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(removeTodoAction(id));
  };
  const updateTodo = (obj) => {
    dispatch(updateTodoAction(obj));
  };
  const completeTodo = (id) => {
    dispatch(completeTodoAction(id));
  };
  const changePriority = (priority) => {
    dispatch(changeTodoPriorityAction(priority));
  };

  if (tasksData.statusOfPriority === 1) {
    setShow(false);
  } else if (tasksData.statusOfPriority === 2) {
    setShow(false);
  } else if (tasksData.statusOfPriority === 3) {
    setShow(false);
  }

  console.log(tasksData);
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => dispatch(sortTodoAction(1))}>
          Low Priority
        </button>

        <button onClick={() => dispatch(sortTodoAction(2))}>
          Medium Priority
        </button>

        <button onClick={() => dispatch(sortTodoAction(3))}>
          High Priority
        </button>
      </div>

      {show && (
        <div className="displaytodos__wrapper">
          <div className="displaytodos__block">
            <h2>ToDo</h2>
            {tasksData.map((item) => {
              return (
                item.completed === false &&
                item.status === status.todo && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={() => removeTodo(item.id)}
                    updateTodo={() => updateTodo(item)}
                    completeTodo={() => completeTodo(item.id)}
                    changePriority={() => changePriority(item.statusOfPriority)}
                  />
                )
              );
            })}
          </div>

          <div className="displaytodos__block">
            <h2>inProgress</h2>
            {tasksData.map((item) => {
              return (
                item.completed === false &&
                item.status === status.inprogress && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={() => removeTodo(item.id)}
                    updateTodo={() => updateTodo(item)}
                    completeTodo={() => completeTodo(item.id)}
                  />
                )
              );
            })}
          </div>

          <div className="displaytodos__block">
            <h2>Done</h2>
            {tasksData.map((item) => {
              return (
                item.completed === false &&
                item.status === status.done && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={() => removeTodo(item.id)}
                    updateTodo={() => updateTodo(item)}
                    completeTodo={() => completeTodo(item.id)}
                  />
                )
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
