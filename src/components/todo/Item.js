import React from 'react';
import styled from "styled-components";
// Hint: props로 id, text, onClick 등 (자유)

export default function Item(props) {
  const {value, check} = props.todo;
  return(
    <li>
      <span onClick = {props.onToggle.bind(this)}>
        {value}
      </span>
      <button onClick = {props.onRemove.bind(this)}>
      X</button>
    </li> 
  );
}
