import React from "react";

export const TodoItem = ({ title, status, handleToggle, id, handleDelete }) => {
  return (
    <div>
      <li>
        {title} - {status ? "Done" : "Not Done"}
        {"    "}
        <button onClick={() => handleToggle(id)}> TOGGLE </button>
        <button onClick={() => handleDelete(id)}>DELETE</button>
      </li>
    </div>
  );
};
