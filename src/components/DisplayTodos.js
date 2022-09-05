import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { status, priority } from "../redux/constant";
import { removeTodoAction, updateTodoAction } from "../redux/reducer";

export const DisplayTodos = (props) => {
  const tasksData = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(removeTodoAction(id));
  };
  const updateTodo = (obj) => {
    dispatch(updateTodoAction(obj));
  };

  console.log(tasksData);
  return (
    <div className="displaytodos">
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
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
