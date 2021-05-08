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
    console.log("addItem함수 실행됨");
    setTodoList(
      todoList.concat({
        id: item.id,
        text: item.text,
        check: item.check,
      })
    );
  };

  return (
    <div>
      <Form onSumbit={addItem} name="wow"></Form>
      <StyledList>
        {todoList.map((todo) => (
          <Item
            id={todo.id}
            text={todo.text}
            check={todo.check}
            key={todo.id}
          ></Item>
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  background: powderblue;
`;
