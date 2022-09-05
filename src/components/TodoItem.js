import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import {
  removeTodoAction,
  updateTodoAction,
  completeTodoAction,
} from "../redux/reducer";

const TodoItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef(true);

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
  return (
    <li key={item.id} className="card">
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
        <button
          style={{ color: "red" }}
          onClick={() => dispatch(removeTodoAction(item.id))}
        >
          <IoClose />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
