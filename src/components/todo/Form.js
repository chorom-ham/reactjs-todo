import styled from "styled-components";
import { useRef } from "react";

import Todo from "./Todo";

// Hint: Form, Input, Button
export default function Form() {
  return (
    <form onSubmit={Todo.handleAddTodo}>
      <InputBox
        ref={Todo.inputRef}
        name="addTodo"
        placeholder="할 일을 입력하세요"
      />
      <InputBtn type="submit">➕</InputBtn>
      <ToDoText>할 일 목록</ToDoText>
    </form>
  );
}

const InputBox = styled.input`
  width: 800px;
  height: 50px;
  margin: 20px;
`;

const InputBtn = styled.button`
  height: 50px;
  border-width: 1px;
  background-color: #eeeecc;
`;

const ToDoText = styled.h1`
  margin: 20px;
`;
