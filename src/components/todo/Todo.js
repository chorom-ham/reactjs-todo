import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Item from "./Item";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(0); //id값 설정 목적

  const addItem = (todo) => {
    setTodoList([...todoList, { id: nextId, text: todo }]); //id값 주기
    setNextId(nextId + 1); //id값 설정
  };

  const removeItem = (id) => {
    // todo.id 가 일치하지 않는 원소만 추출해서 새로운 배열 생성
    // = todo.id 가 id 인 것을 제거
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Form onSubmit={addItem} />
      <ListTitle>📌TO-DO LIST</ListTitle>
      <ItemList>
        {todoList.map((todo) => (
          <Item
            key={todo.id}
            text={todo.text}
            onClick={() => removeItem(todo.id)}
          />
        ))}
      </ItemList>
    </div>
  );
}

const ItemList = styled.ul`
  margin-left: 3rem;
`;

const ListTitle = styled.p`
  font-size: 3rem;
  font-weight: 800;
  margin-left: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default Todo;
