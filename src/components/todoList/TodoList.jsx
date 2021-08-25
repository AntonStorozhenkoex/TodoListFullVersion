import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Footer } from "./Footer";

export const TodoList = ({ todos, filter, setTodos, visibleTodos }) => (
  <div>
    <Form />
    <List visibleTodos={visibleTodos} setTodo={setTodos} todos={todos} />
    <Footer todos={todos} filter={filter} />
  </div>
);
