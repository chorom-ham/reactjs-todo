import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo({todo, onToggle, onRemove}) {
  const {id, input, checked} = todo;
  const todoList = todo.map((id,text) => (
    <Item
      id = {id}
      text = {text}
      onToggle = {onToggle}
      onRemove = {onRemove}
      checked = {checked}
    />
  ));
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      input: "",
      checked: false,
    },
  ]);
  const nextId = useRef(id++);

  const addTodo = () => {
    if(input = ''){
      return ;
    }else{
      const todo = {
        id: nextId.current,
        input,
      };
      setTodoList([todoList, todo]);
      nextId.current++;
    }
  };
  
  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => 
      todo.id !== id
    ));
  };
  
  const onToggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
      todo.id === id? {todo, checked: !todo.checked} : todo
      )
    );
  };

  return (
    <div>
      <Form 
        value = {input}
        onKeyPress = {handleKeyPress}
        onCreate={addTodo}
      />
      <section>
        <p class = "title">
          할 일 목록
        </p>
        <ul id = "todo_list">
          {todoList.map( (todo) => (
            <Item
              key = {todo.id}
              todo={todo}
              onToggle = {onToggle}
              onRemove = {onRemove}/>
          ))}
        </ul>
      </section>
    </div>
  );
}
