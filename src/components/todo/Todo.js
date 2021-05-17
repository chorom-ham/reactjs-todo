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

  return (
    <div>
      <Form onSubmit={addElement}/>
      <Styledul>
      {todoList.map(element => (
        <Item id={element.id} text={element.text} />
      ))}</Styledul>
    </div>
  );
}

const Styledul = styled.ul`

`;
