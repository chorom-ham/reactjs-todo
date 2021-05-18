import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  function DeleteTodo({ todoList, setTodoList }) {
    function handleDeleteTodo() {
      setTodoList((prevTodos) => {
        prevTodos.filter((t) => t.id !== todoList.id);
      });
    }

    return (
      <span
        onClick={handleDeleteTodo}
        role="button"
        style={{ marginLeft: 10, cursor: "pointer" }}
      >
        ❌
      </span>
    );
  }

  function AddTodo({ setTodoList }) {
    const inputRef = React.useRef();

    function handleAddTodo(event) {
      event.preventDefault();
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: Math.random(),
        text,
        done: false,
      };
      setTodoList((prevTodos) => {
        return prevTodos.concat(todo);
      });
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <Item setTodoList={setTodoList} todoList={todoList} />
      <Form setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}
