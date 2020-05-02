import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

export default () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text }) => (
          <div>{text}</div>
        ))}
      </div>
    </div>
  );
};
