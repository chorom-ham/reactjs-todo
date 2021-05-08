import styled from "styled-components";

// Hint: props로 id, text, onClick 등 (자유)
export default function Item(props) {
  // const onSubmit = e =>{
  //   e.preventDefault();
  //   props.onSubmit();
  // };
  return (
    <div>
      <StyledItem>{props.text}</StyledItem>
      <StyledDeleteButton>X</StyledDeleteButton>
      {/* {props.list.map((todo) => (
        <div>
          <StyledItem>{todo.text}</StyledItem>
          <StyledDeleteButton>X</StyledDeleteButton>
        </div>
      ))} */}
    </div>
  );
}

const StyledItem = styled.span`
  font-size: 2rem;
`;
const StyledDeleteButton = styled.button`
  margin-left: 1rem;
`;
