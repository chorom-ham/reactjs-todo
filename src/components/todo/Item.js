import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ id, text, onRemove }) {
  return (
    <Styledli>
      <Styledtext>{text}</Styledtext>
      <Styledremovebtn onClick={onRemove}>X</Styledremovebtn>
    </Styledli>
  );
}

const Styledli = styled.li``;

const Styledtext = styled.span``;

const Styledremovebtn = styled.button``;
