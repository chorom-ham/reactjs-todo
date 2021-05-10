import React from 'react';
import { useCallback, useState, useRef } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  let nextId = useRef();
  const [value, setValue] = useState('');

  
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const addTodo = useCallback(value => {
    const todo = {
      id: nextId.current,
      value,
      check: false
    };
    setTodoList(todoList => todoList.concat(todo));
    nextId.current+=1;
  },[todoList]);

 const handleCreate = (e) => {
   e.preventDefault();
   if (value !== ''){
    addTodo(value);
    setValue('');
   }
 };
 
const handleKeyPress = (e) => {
  if(e.key === 'Enter'){
   handleCreate(e);
 }
};

  const handleRemove = useCallback(id => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    console.log('remove');
  }, [todoList]);
  
  const handleToggle = useCallback(id => {
    setTodoList(
      todoList.map((todo) => todo.id === id? {...todo, check: !todo.check} : todo)
    );
    console.log('toggle');
  }, [todoList]);

  return (
    <div>
      <Form 
        value = {value}
        onChange = {handleChange}
        onKeyPress = {handleKeyPress}
        onCreate={handleCreate}
      />
      <Section>
        <p class = "title">
          할 일 목록
        </p>
        <StyledUl id = "todo_list">
          {todoList.map( (todo) => (
            <Item
              todo = {todo}
              id = {todo.id}
              key = {todo.id}
              value = {todo.value}
              check = {todo.check}
              onToggle = {handleToggle}
              onRemove = {handleRemove}
            />
          ))}
        </StyledUl>
      </Section>
    </div>
  );
}

const StyledUl= styled.ul`
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