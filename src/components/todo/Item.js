import styled, { css } from "styled-components";

export default function Item(props) {
  const itemDelete = (event) => {
    event.preventDefault();
    props.remove();
  };

  const itemToggleLine = (event) => {
    event.preventDefault();
    props.toggleLine();
  };

  return (
    <StyledLine>
      <StyledItem onClick={itemToggleLine} check={props.check}>
        {props.text}
      </StyledItem>
      <StyledDeleteButton onClick={itemDelete}>X</StyledDeleteButton>
    </StyledLine>
  );
}

const StyledLine = styled.form`
  margin: 1rem;
`;

const StyledItem = styled.span`
  ${(props) => css`
    font-size: 2rem;
    text-decoration: ${props.check ? "line-through" : "none"};
  `}
`;

const StyledDeleteButton = styled.button`
  background: #272727;
  color: #ffffff;
  margin-left: 1rem;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
`;
