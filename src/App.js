import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

export default () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("show_all");

  const toggleComplete = (i) => {
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );
  };

  const removeTodo = (todoText) => {
    let updatedTodos = todos.filter((todo) => {
      return todo.text !== todoText;
    });

    setTodos(updatedTodos);
  };

  const displayTodos = () => {
    let displayedTodos = [];
    switch (filter) {
      case "show_all":
        displayedTodos = todos;
        break;

      case "show_active":
        displayedTodos = todos.filter((todo) => todo.complete === false);
        break;

      case "show_complete":
        displayedTodos = todos.filter((todo) => todo.complete === true);
        break;
      default:
        break;
    }
    return displayedTodos.map(({ text, complete }, i) => (
      <div>
        <div
          key={text + i}
          className="todos"
          onClick={() => toggleComplete(i)}
          style={{ textDecoration: complete ? "line-through" : "" }}
        >
          {text}
        </div>
        <button onClick={() => removeTodo(text)}>Remove</button>
      </div>
    ));
  };

  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>{displayTodos()}</div>
      <button onClick={() => setTodos([])}>Reset</button>
      <button onClick={() => setFilter("show_all")}>Show All</button>
      <button onClick={() => setFilter("show_active")}>Show Active</button>
      <button onClick={() => setFilter("show_complete")}>Show Complete</button>
    </div>
  );
};
