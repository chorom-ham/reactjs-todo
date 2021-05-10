import React from 'react';
import { useState, useRef } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');
  const nextId = useRef(0);

  const handleChange = (e) => {
    setValue(e.target.value)
  };

 const handleCreate = (e) => {
   e.preventDefault();
   if (value !== ''){
      setTodoList(
        todoList.concat({
          id: nextId,
          value,
          check: false
        })
      );
      setValue('');
      nextId.current += 1;
      console.log(nextId);
   }
 };
 
const handleKeyPress = (e) => {
  if(e.key === 'Enter'){
   handleCreate(e);
 }
};

  const handleRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    console.log('remove');
  };
  
  const handleToggle = (id) => {
    setTodoList(
      todoList.map((todo) => todo.id === id? {...todo, check: !todo.check} : todo)
    );
    console.log('toggle');
  };

  return (
    <div>
      <Form 
        value = {value}
        onKeyPress = {handleKeyPress}
        onChange = {handleChange}
        onCreate={handleCreate}
      />
      <Section>
        <p class = "title">
          할 일 목록
        </p>
        <StyledUl id = "todo_list">
          {todoList.map( (todo) => (
            <Item
              id = {todo.id}
              value = {todo.value}
              check = {todo.check}
              onRemove = {() => handleRemove(todo.id)}
              onToggle = {() => handleToggle(todo.id)}
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