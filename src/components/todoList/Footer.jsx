import React from "react";
import { ButtonFooter } from "./ButtonFooter";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from "../../redux/filter/types";
import { useDispatch } from "react-redux";
import { deleteAllTodo } from "../../redux/todos/action";
import { changeFilterAction } from "../../redux/filter/action";

export const Footer = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <footer className="footer">
      <ButtonFooter
        title="Clear"
        filter={filter}
        onClick={() => dispatch(deleteAllTodo())}
      />
      <ButtonFooter
        title="All"
        filter={filter}
        expectFilter="SHOW_ALL"
        onClick={() => dispatch(changeFilterAction(SHOW_ALL))}
      />
      <ButtonFooter
        title="Completed"
        filter={filter}
        expectFilter="SHOW_COMPLETED"
        onClick={() => dispatch(changeFilterAction(SHOW_COMPLETED))}
      />
      <ButtonFooter
        title="In Progress"
        filter={filter}
        expectFilter="SHOW_ACTIVE"
        onClick={() => dispatch(changeFilterAction(SHOW_ACTIVE))}
      />
    </footer>
  );
};
