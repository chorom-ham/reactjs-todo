import { useState } from "react";
import styled from "styled-components";

export default function Item(props) {
  const [line, setLine] = useState(false);

  return (
    <StyledLine>
      <StyledItem onClick={() => setLine(!line)} line={line}>
        {props.text}
      </StyledItem>
      <StyledDeleteButton onClick={props.onClick}>X</StyledDeleteButton>
    </StyledLine>
  );
}

const StyledLine = styled.div`
  margin: 1rem;
`;

const StyledItem = styled.span`
  font-size: 2rem;
  text-decoration: ${(props) => (props.line ? "line-through" : "none")};
`;

const StyledDeleteButton = styled.button`
  background: #272727;
  color: #ffffff;
  margin-left: 1rem;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
`;
