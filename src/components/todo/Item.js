import React from 'react';
import Todo from "./Todo";

import styled from "styled-components";
// Hint: props로 id, text, onClick 등 (자유)

export default function Item(props) {
  const {value, check} = props.todo;
  return(
    <StyledList>
      <span onClick = {props.onToggle}>
        {value}
      </span>
      <button onClick = {props.onRemove}>
      X</button>
    </StyledList> 
  );
}

const StyledList= styled.li`
display: flex;
font-size: 2rem;
align-items: center;
padding: 2rem;
`;