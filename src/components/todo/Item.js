import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item(props) {
  return (
    <div>
      <StyledItem>
        {props.id}. {props.text}
      </StyledItem>
      <StyledDeleteButton>X</StyledDeleteButton>
    </div>
  );
}

const StyledItem = styled.span`
  font-size: 2rem;
`;
const StyledDeleteButton = styled.button`
  margin-left: 1rem;
`;
