import React, { useState } from "react";

export const AddTodo = ({ handleTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // console.log(text)

  return (
    <div>
      <h1>Todo</h1>
      <input onChange={handleChange} placeholder="Add Something" />
      <button onClick={() => handleTodo(text)}>ADD</button>
    </div>
  );
};
