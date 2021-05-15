import React from 'react';
import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  //hook 사용해서 id 증가하도록
  const [id, setId] = useState(0);

  const addTodoList = (todo) => { 
    setTodoList(todoList.concat({
      id: id, 
      value: todo, 
      check: false
    }));
    setId(id+1);
  };

  const removeTodo = (id) => {
    const removeTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(removeTodoList);
  };
  
  const toggleTodo = (id) => {
    const toggleTodoList = todoList.map(todo => {
      if (todo.id === id) {
        todo.check = !todo.check;
      }
      return todo;
    })
    setTodoList(toggleTodoList);
  };

  return (
    <div>
      <Form onCreate={addTodoList}/>
      <Section>
        <TodoListTitle ClassName = "todoListTitle">
          할 일 목록
        </TodoListTitle>
        <TodoList ClassName = "todoList">
          {todoList.map((todo) => (
            <Item
              id = {todo.id}
              value = {todo.value}
              check = {todo.check}
              onRemove = {() => removeTodo(todo.id)}
              onToggle = {() => toggleTodo(todo.id)}
            />
          ))}
        </TodoList>
      </Section>
    </div>
  );
}

const TodoList= styled.ul`
font-size: 2rem;
align-items: center;
padding-left: 1rem;
list-style: none;
`;

const Section= styled.section`
font-size: 2rem;
font-weight: bold;
align-items: center;
padding-left: 2rem;
margin: 2rem;
`;

const TodoListTitle = styled.p``;