import React from "react";

export const Input = ({ inputValue, changeInputValue }) => (
  <input
    className="input"
    placeholder="Введите новое значение"
    value={inputValue}
    onChange={(e) => changeInputValue(e)}
  />
);
