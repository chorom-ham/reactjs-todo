import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

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
    // filter를 통과한 원소만 모아서 새로운 배열을 만든다.
    setTodoList(todoList.filter((item) => item.id !== id));
    console.log(todoList);
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
      <ContentHeader>할 일 목록</ContentHeader>
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
  margin-left: 10rem;
`;

const ContentHeader = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 10rem;
`;
