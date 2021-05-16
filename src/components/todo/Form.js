import styled from "styled-components";
import { useState } from "react";

// Hint: Form, Input, Button
function Form(props) {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //버튼 클릭 시 새로고침 실행 막기
    props.onSubmit(input);

    setInput(""); //input값 초기화
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={input}
        onChange={onChange}
        placeholder="오늘 할 일을 입력하세요!"
      />
      <InputButton type="submit" onClick={handleSubmit}>
        추가
      </InputButton>
    </StyledForm>
  );
}

//Input 부분 form
const StyledForm = styled.form`
  width: 90%;
  height: 6rem;
  padding: 1rem;
  margin-top: 2rem;
  margin-left: 2.5rem;
  border-radius: 1rem;
  display: flex;
  align-content: center;
  flex-direction: row;
  background-color: #00462a;
`;

//Input 입력 부분
const StyledInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 0.5rem;
  padding-left: 1.5rem;
  border: 0.5rem inset #eeeecc;
  background-color: ivory;
  border-radius: 1rem;
`;

const InputButton = styled.button`
  width: 10%;
  height: 100%;
  padding: 0.5rem;
  border: 0.5rem inset #eeeecc;
  background-color: ivory;
  color: #00462a;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 1rem;
`;

export default Form;
