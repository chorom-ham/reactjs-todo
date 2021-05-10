import React from 'react';
import styled from "styled-components";
// Hint: props로 id, text, onClick 등 (자유)

export default function Item(props) {
  return(
    <StyledList>
      <span
        onClick = {(e) => {
          e.preventDefault();
          props.onToggle();
        }}
        style={{ textDecoration: (props.check ? "line-through" : "none") }}>
        {props.value}
      </span>
      <DeleteButton
        onClick = {(e) => {
          e.preventDefault();
          props.onRemove();
        }}>
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
