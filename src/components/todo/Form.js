import styled from "styled-components";
import React, { useState } from "react";

// Hint: Form, Input, Button
export default function Form({onSubmit}) {
  const [value, setValue] = useState("");

  const onChange = (e) =>{
    setValue(e.target.value);
  };
  const submitInput = e =>{
    console.log("submit");
    e.preventDefault();
    if(value === ""){
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

`;

const Styledaddbtn = styled.button`
color:green
`;
const Styledinput = styled.input`
width:70%
`;

