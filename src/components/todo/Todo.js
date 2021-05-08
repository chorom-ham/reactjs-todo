import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "할일1",
      check: false,
    },
    {
      id: 1,
      text: "할일2",
      check: true,
    },
  ]);

  const addItem = (item) => {
    setTodoList(
      todoList.concat({
        id: item.id,
        text: item.text,
        check: item.check,
      })
    );
  };

  // const removeItem = (id) => {
  // };

  // const toggleLine = (id) => {
  //   const newTodoList = todoList.map((item) => {
  //     if (item.id === id) {
  //       item.check = !item.check;
  //     }
  //     return item;
  //   });
  //   setTodoList(newTodoList);
  // };

  return (
    <div>
      <Form onSubmit={addItem} name="wow"></Form>
      <StyledList>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <Item text={todo.text}></Item>
          </div>
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  background: powderblue;
`;
