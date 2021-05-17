import { useRef, useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const addElement =(inputValue)=> {
    setTodoList([...todoList, { id: nextId, text: inputValue }]);
    nextId.current += 1;
  }

  const removeElement = (id) =>{
    setTodoList(todoList.filter(todoList => todoList.id !== id));
  }

  return (
    <div>
      <Form onSubmit={addElement}/>
      <Styledul>
      {todoList.map((element, index) => (
        <Item key = {index} id={element.id} text={element.text} onRemove={removeElement} />
      ))}</Styledul>
    </div>
  );
}

const Styledul = styled.ul`

`;
