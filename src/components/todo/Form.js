import React from "react";
import styled from "styled-components";
import { useState } from "react";
// Hint: Form, Input, Button

export default function Form(props) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();
    if (value !== "") {
      props.onCreate(value);
      setValue("");
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodo(e);
    }
  };

  return (
    <StyledForm ClassName="todoForm" onCreate={createTodo}>
      <StyledInput
        type="text"
        value={value}
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <StyledAddButton type="submit">추가</StyledAddButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  height: 7rem;
  align-items: center;
  padding: 1rem;
  margin: 2rem;
  justify-content: center;
`;
const StyledInput = styled.input`
  display: flex;
  font-size: 2rem;
  width: 95%;
  align-items: center;
  padding: 1rem;
`;
const StyledAddButton = styled.button`
  display: flex;
  font-size: 2rem;
  width: 5%;
  align-items: center;
  padding: 1rem;
  margin-left: 1rem;
  justify-content: center;
`;
