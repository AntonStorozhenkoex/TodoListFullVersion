import React from "react";
import { BtnDelete } from "./ButtonDelete";
import { toggleTodo } from "../../redux/todos/action";
import { useDispatch } from "react-redux";

export const ListItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="listItem">
      <li
        className={todo.isDone ? "done" : "notDone"}
        onClick={() => dispatch(toggleTodo(todo))}
      >
        {todo.value}
      </li>
      <BtnDelete todo={todo} />
    </div>
  );
};
