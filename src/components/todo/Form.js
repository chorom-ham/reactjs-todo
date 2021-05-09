import { Component } from "react";
import styled from "styled-components";

// Hint: Form, Input, Button
export default function Form({value, onCreate, onChange, onKeyPress}) {
  return (
    <div class = "content">
        <form class = "todo_form">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value = {value}
            onChange = {onChange}
            onKeyPress={onKeyPress}
          />
          <button 
            type = "submit" 
            onClick = {onCreate}>
          추가</button>
        </form>
    </div>
  );
}
