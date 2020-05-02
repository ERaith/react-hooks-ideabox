import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

export default () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) =>{
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    )}

  const removeTodo = (todoText) => {
    let updatedTodos = todos.filter((todo) => {
      return todo.text != todoText;
    });
      
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div>
            <div
              key={text + i}
              onClick={() => toggleComplete(i)}
              style={{ textDecoration: complete ? "line-through" : "" }}
            >
              {text}
            </div>
            <button onClick={() => removeTodo(text)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
};
