import React from 'react';
import styled from "styled-components";
// Hint: Form, Input, Button

export default function Form(props){
  return (
    <StyledForm class = "todo_form">
        <StyledInput
          type = "text"
          placeholder="할 일을 입력하세요"
          value = {props.value}
          onChange = {props.onChange}
          onKeyPress={props.onKeyPress}/>
        <StyledAddButton
          type="submit"
          onClick = {props.onCreate}>
        추가</StyledAddButton>
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
