import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { status, priority } from "../redux/constant";
import {
  removeTodoAction,
  updateTodoAction,
  completeTodoAction,
  sortTodoAction,
} from "../redux/reducer";

export const DisplayTodos = (props) => {
  const tasksData = useSelector((state) => state.tasks);
  const [sort, setSort] = useState("");
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

  // const setSort = (t) => {
  //   console.log(t);
  //   dispatch(sortTodoAction(t));
  // };

  console.log(tasksData);
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort(dispatch(sortTodoAction("low")))}>
          Low Priority
        </button>

        <button onClick={() => setSort(dispatch(sortTodoAction("middle")))}>
          Medium Priority
        </button>

        <button onClick={() => setSort(dispatch(sortTodoAction("high")))}>
          High Priority
        </button>
      </div>
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
    </div>
  );
};
