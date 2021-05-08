import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header.js";
import Todo from "./components/todo/Todo";
import Form from "./components/todo/Form";

const GlobalStyle = createGlobalStyle`
  html {
    font-size : 10px;
  }
  body {
    margin: 0;
    background-color: #eeeecc;
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
