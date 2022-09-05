import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { status, priority } from "../redux/constant";
import { addTodoAction } from "../redux/reducer";

export const Todos = (props) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      dispatch(
        addTodoAction({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          completed: false,
          status: status.todo,
          date: new Date(),
          priority: priority.low,
        })
      );
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button className="add-btn" onClick={() => add()}>
        Add
      </button>
      <br />
    </div>
  );
};
