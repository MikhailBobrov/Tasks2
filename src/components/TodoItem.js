import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import {
  removeTodoAction,
  updateTodoAction,
  completeTodoAction,
  changeTodoPriorityAction,
} from "../redux/reducer";
import { statusOfPriority } from "../redux/constant";

const TodoItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef(true);
  const classNameLow =
    statusOfPriority.low === item.statusOfPriority && "card__yellow";
  const classNameMiddle =
    statusOfPriority.middle === item.statusOfPriority && "card__green";
  const classNameHigh =
    statusOfPriority.high === item.statusOfPriority && "card__red";
  const className = classNameLow || classNameMiddle || classNameHigh;

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodoAction({ id, item: value }));
      inputRef.current.disabled = true;
    }
  };

  const completedTodo = (id, completed) => {
    dispatch(completeTodoAction({ id, completed: completed }));
  };

  const changePriority = (changeStatus, id) => {
    dispatch(changeTodoPriorityAction({ id, statusOfPriority: changeStatus }));
  };

  return (
    <li key={item.id} className={`${className} card`}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completedTodo(item.id, item.completed)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button
          style={{ color: "red" }}
          onClick={() => dispatch(removeTodoAction(item.id))}
        >
          <IoClose />
        </button>
        <button
          onClick={() => changePriority(Number(prompt()), item.id)}
          className="card__button"
        >
          ChangePriority
        </button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
