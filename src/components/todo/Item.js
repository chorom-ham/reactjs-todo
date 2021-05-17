import styled from "styled-components";
import React, { useState } from "react";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ id, text, onRemove }) {
  const [toggle, setToggle] = useState(false);

  return (
    <Styledli>
      <Styledtext onClick={() => setToggle(!toggle)} toggle={toggle}>
        {text}
      </Styledtext>
      <Styledremovebtn onClick={onRemove}>X</Styledremovebtn>
    </Styledli>
  );
}

const Styledli = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

const Styledtext = styled.span`
  text-decoration: ${(props) => (props.toggle ? "line-through" : "none")};
`;

const Styledremovebtn = styled.button`
  font-size: 1rem;
  width: 24px;
  height: 24px;
  border: none;
  background-color: #00462a;
  color: white;
  margin-left: 3px;
  border-radius: 50%;
`;
