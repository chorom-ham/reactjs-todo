import React from 'react';
import { useCallback, useState, useRef } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  let nextId = useRef();
  const [value, setValue] = useState('');

  const addTodo = useCallback(value => {
    const todo = {
      id: nextId.current,
      value,
      check: false
    };
    setTodoList(todoList => todoList.concat(todo));
    nextId.current += 1;
  },[todoList]);
 
  const handleChange = (e) => {
    setValue(e.target.value)
  };

 const handleCreate = (e) => {
   e.preventDefault();
   if (value !== ''){
    addTodo(value);
    setValue('');
   }
 };

  const handleRemove = useCallback(id => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }, [todoList]);
  
  const handleToggle = useCallback(id => {
    setTodoList(
      todoList.map((todo) =>
      todo.id === id? {...todo, check: !todo.check} : todo
      )
    )}, [todoList]);

  const handleKeyPress = (e) => {
     if(e.key === 'Enter'){
      handleCreate(e);
    }
  };

  return (
    <div>
      <Form 
        value = {value}
        onChange = {handleChange}
        onKeyPress = {handleKeyPress}
        onCreate={handleCreate}
      />
      <section>
        <p class = "title">
          할 일 목록
        </p>
        <ul id = "todo_list">
          {todoList.map( (todo, id) => (
            <Item
              key = {id}
              todo = {todo}
              onToggle = {handleToggle}
              onRemove = {handleRemove}/>
          ))}
        </ul>
      </section>
    </div>
  );
}
