import React from 'react';
import Todo from "./Todo";

import styled from "styled-components";
// Hint: props로 id, text, onClick 등 (자유)

export default function Item(props) {
  const {value, check} = props.todo;
  return(
    <StyledList>
      <span 
        onClick = {props.onToggle}
        style={{ textDecoration: check ? "line-through" : "none" }}>
        {value}
      </span>
      <DeleteButton onClick = {props.onRemove}>
      X</DeleteButton>
    </StyledList> 
  );
}

const StyledList= styled.li`
display: flex;
font-size: 2rem;
align-items: center;
padding: 0.5rem;
`;
const DeleteButton = styled.button`
display: flex;
font-size: 1rem;
width: 2rem;
height: 2rem;
align-items: center;
margin-left: 2rem;
justify-content: center;
`;
