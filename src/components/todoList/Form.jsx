import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/todos/action";

export const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addNewTodo(inputValue));
    setInputValue("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input inputValue={inputValue} changeInputValue={changeInputValue} />
      <Button />
    </form>
  );
};
