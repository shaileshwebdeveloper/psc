import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [todos, setTodo] = useState([]);

  const handleTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString + text,
    };

    // we can send object in spread operator

    setTodo([...todos, newItem]);
  };

  const handleToggle = (id) => {
    setTodo(
      todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      ),
    );
  };

  //    console.log("todos", todos)

 const handleDelete = (id) => {
     setTodo(todos.filter((todo) =>  todo.id !== id))
 }


  return (
    <div>
      <AddTodo handleTodo={handleTodo} />

      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={() => handleToggle(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
