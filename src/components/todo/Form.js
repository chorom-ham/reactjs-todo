import styled from "styled-components";
import React, { useState } from "react";

// Hint: Form, Input, Button
let nextId = 2;

export default function Form(props) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: nextId++,
      text: value,
      check: false,
    });
    setValue("");
  };
  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledInput
        id="newItem"
        type="text"
        onChange={onChange}
        value={value}
      ></StyledInput>
      <InputButton type="submit">추가</InputButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background-color: #272727;
  display: flex;
  color: #000000;
  font-size: 2rem;
  height: 7rem;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const StyledInput = styled.input`
  font-size: 3rem;
  border: 0;
  flex: 1;
`;

const InputButton = styled.button`
  font-size: 2rem;
  border: 0;
  margin-left: 1rem;
  padding: 0.5rem;
`;
