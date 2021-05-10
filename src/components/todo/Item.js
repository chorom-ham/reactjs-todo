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
  // 이부분을 주석해제하면 정상작동이 됩니다.
  // const StyledItem = styled.span`
  //   font-size: 2rem;
  //   text-decoration: ${props.check ? "line-through" : "none"};
  // `;

  return (
    <form>
      <StyledItem onClick={itemToggleLine}>
        {props.id} {props.text} {props.check ? "true" : "false"}
      </StyledItem>
      <button onClick={itemDelete}>X</button>
    </form>
  );
}

const StyledItem = styled.span`
  ${(props) => css`
    font-size: 2rem;
    text-decoration: ${props.check ? "line-through" : "none"};
    ${console.log(props.check)};
  `}
`;

const StyledDeleteButton = styled.button`
  margin-left: 1rem;
`;
