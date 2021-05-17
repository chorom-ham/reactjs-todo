import styled from "styled-components";
import React, { useState } from "react";

// Hint: Form, Input, Button
export default function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const submitInput = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <Styledform onSubmit={submitInput}>
      <Styledinput
        value={value}
        placeholder="할 일을 입력하세요."
        onChange={onChange}
      />
      <Styledaddbtn>추가</Styledaddbtn>
    </Styledform>
  );
}

const Styledform = styled.form`
  margin-right:auto;
  margin-left:auto
`;

const Styledaddbtn = styled.button`
  color: green;
  height: 2.5rem;
`;
const Styledinput = styled.input`
  height: 2.5rem;
  width: 90%;
`;
