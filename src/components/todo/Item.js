import styled from "styled-components";
import React, { useEffect, useState } from "react";

//할 일 하나에 대한 내용(toggle 시 중간선, 체크박스 등)
// Hint: props로 id, text, onClick 등 (자유)

function Item(props) {
  const [line, setLine] = useState(false); //줄 긋기(초기값:false)
  return (
    <ItemLine>
      <StyledItem onClick={() => setLine(!line)} line={line}>
        ✔ {props.text}
      </StyledItem>
      <DeleteButton onClick={props.onClick}>X</DeleteButton>
    </ItemLine>
  );
}

const ItemLine = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const StyledItem = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: ${(props) => (props.line ? "line-through" : "none")};
  color: ${(props) => (props.line ? "gray" : "black")};
`;

const DeleteButton = styled.button`
  background-color: #00462a;
  color: ivory;
  margin-left: 0.5rem;
  border-radius: 100%;
  height: 2rem;
`;

export default Item;
