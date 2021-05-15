import { Fragment, useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Item from "./Item";

export default function Todo() {
  // 목록 관리하는 배열
  const [todoList, setTodoList] = useState([]);
  // 항목마다 부과할 ID
  const [nextId, setNextId] = useState(0);

  const addItem = (newItem) => {
    setTodoList([...todoList, { id: nextId, text: newItem }]);
    setNextId(nextId + 1);
  };

  const removeItem = (id, text) => {
    if (!window.confirm(text + "을/를 삭제하시겠습니까?")) {
      return;
    }
    // filter를 통과한 원소만 모아서 새로운 배열을 만든다.
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <Fragment>
      <Form onSubmit={addItem}></Form>
      <ContentHeader>할 일 목록</ContentHeader>
      <StyledList>
        {todoList.map((item) => (
          <Item
            key={item.id}
            text={item.text}
            onClick={() => removeItem(item.id, item.text)}
          ></Item>
        ))}
      </StyledList>
    </Fragment>
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
