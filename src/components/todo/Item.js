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

const Styledli = styled.li``;

const Styledtext = styled.span`
  text-decoration: ${(props) => (props.toggle ? "line-through" : "none")};
`;

const Styledremovebtn = styled.button``;
