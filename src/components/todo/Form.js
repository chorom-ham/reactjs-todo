import React from 'react';
import styled from "styled-components";
// Hint: Form, Input, Button

export default function Form(props){
  return (
    <form class = "todo_form">
        <input
          type = "text"
          placeholder="할 일을 입력하세요"
          value = {props.value}
          onChange = {props.onChange}
          onKeyPress={props.onKeyPress}/>
        <button 
          type="submit"
          onClick = {props.onCreate}>
        추가</button>
      </form>
  );
}