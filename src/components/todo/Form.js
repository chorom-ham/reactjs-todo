import styled from "styled-components";
import React, { useState } from "react";

export default function Form(props) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    // 입력되는 text를 value변수에 반영
    setValue(e.target.value);
  };

  const submitText = (e) => {
    e.preventDefault();

    // 빈 문자열 입력시 함수 종료
    if (value === "") {
      return;
    }

    props.onSubmit(value);

    setValue("");
  };

  return (
    <StyledForm onSubmit={submitText}>
      <StyledInput type="text" onChange={onChange} value={value}></StyledInput>
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
