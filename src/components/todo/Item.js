import styled from "styled-components";
// Hint: props로 id, text, onClick 등 (자유)
export default function Item() {
  id = this.props.id;
  return (
      <li>
        <span onClick = {() => this.props.onToggle(id)}>
          {this.props.input}
        </span>
        <button
          type = "delete"
          onClick = {() => this.props.onRemove(id)}>
        X</button>
      </li> 
  );
}
