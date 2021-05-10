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

  // 이부분을 주석해제하면 클릭시 줄이 그어지는 기능이 작동함.
  // 다만 함수 내부에 styled component를 작성하였다는 경고가 뜬다.
  // const StyledItem = styled.span`
  //   font-size: 2rem;
  //   text-decoration: ${props.check ? "line-through" : "none"};
  // `;

  return (
    <StyledLine>
      <StyledItem onClick={itemToggleLine}>
        {props.text} {props.check ? "완료" : "미완료"}
      </StyledItem>
      <StyledDeleteButton onClick={itemDelete}>X</StyledDeleteButton>
    </StyledLine>
  );
}

const StyledLine = styled.form`
  margin: 1rem;
`;

// 작동되고 있지 않음
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
