import React from "react";

export const ButtonFooter = ({ title, onClick, filter, expectFilter }) => (
  <button
    className={filter === expectFilter ? "selectedButton" : "footerButton"}
    onClick={onClick}
  >
    {title}
  </button>
);
