import styled from "styled-components";

export default function Header() {
  return <StlyedHeader>✏️React.js로 만든 TO-DO APP</StlyedHeader>;
}

const StlyedHeader = styled.header`
  background-color: #00462a;
  color: ivory;
  font-size: 3rem;
  font-weight: 800;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
