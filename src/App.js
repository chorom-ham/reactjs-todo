import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header.js";
import Todo from "./components/todo/Todo";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Stylish&display=swap');
  html {
    font-size : 13px;
  }
  body {
    margin: 0;
    background-color: #eeeecc;
  }
  * {
  font-family: 'Stylish', sans-serif;
  }
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Todo />
    </Wrapper>
  );
}

export default App;
