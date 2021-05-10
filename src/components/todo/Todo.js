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

  const removeItem = (id, text) => {
    if (!window.confirm(text + "을/를 삭제하시겠습니까?")) {
      return;
    }
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const toggleLine = (id) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        item.check = !item.check;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <Form onSubmit={addItem}></Form>
      <StyledList>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <Item
              id={todo.id}
              text={todo.text}
              check={todo.check}
              remove={() => removeItem(todo.id, todo.text)}
              toggleLine={() => toggleLine(todo.id)}
            ></Item>
          </div>
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
  background: powderblue;
`;
